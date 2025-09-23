import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Security utilities
const validateEmail = (email) => {
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
	return emailRegex.test(email)
}

const validatePhone = (phone) => {
	// More flexible phone validation for international numbers
	const phoneRegex = /^[\+]?[\d\s\-\(\)\.]{8,}$/
	const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, "")
	return cleanPhone.length >= 8 && phoneRegex.test(phone)
}

const sanitizeInput = (input) => {
	if (typeof input !== "string") return input
	return input.trim().replace(/[<>]/g, "") // Basic XSS prevention
}

const detectSpam = (text) => {
	const spamPatterns = [
		/test|spam|fake|bot|lorem|ipsum|asdf|qwerty/i,
		/(.)\1{4,}/g, // Repeated characters
		/https?:\/\//gi, // URLs (generally not allowed in applications)
	]

	return spamPatterns.some((pattern) => pattern.test(text))
}

// Client-side rate limiting
const RATE_LIMIT_KEY = "tdr_form_submissions"
const MAX_SUBMISSIONS_PER_HOUR = 2
const MAX_SUBMISSIONS_PER_DAY = 3

const checkClientRateLimit = () => {
	const now = Date.now()
	const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || "[]")

	// Clean old submissions (older than 24 hours)
	const recentSubmissions = submissions.filter(
		(time) => now - time < 24 * 60 * 60 * 1000
	)

	// Check hourly limit
	const hourlySubmissions = recentSubmissions.filter(
		(time) => now - time < 60 * 60 * 1000
	)
	if (hourlySubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
		return {
			allowed: false,
			reason: "Too many submissions in the last hour. Please wait.",
		}
	}

	// Check daily limit
	if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_DAY) {
		return {
			allowed: false,
			reason: "Daily submission limit reached. Please try again tomorrow.",
		}
	}

	return { allowed: true }
}

const recordSubmission = () => {
	const now = Date.now()
	const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || "[]")
	submissions.push(now)

	// Keep only recent submissions
	const recentSubmissions = submissions.filter(
		(time) => now - time < 24 * 60 * 60 * 1000
	)
	localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions))
}

// Secure validation function with detailed field-specific errors
export const validateApplicationData = (formData) => {
	// Check Full Name
	if (!formData.fullName || formData.fullName.trim().length === 0) {
		return ["👤 Please enter your full name"]
	}
	if (formData.fullName.trim().length < 2) {
		return ["👤 Full name must be at least 2 characters long"]
	}
	if (formData.fullName.length > 100) {
		return ["👤 Full name is too long (maximum 100 characters)"]
	}
	if (detectSpam(formData.fullName)) {
		return ["👤 Please enter a valid full name (avoid test/fake names)"]
	}

	// Check Email
	if (!formData.email || formData.email.trim().length === 0) {
		return ["📧 Please enter your email address"]
	}
	if (!validateEmail(formData.email)) {
		return ["📧 Please enter a valid email address (e.g., name@example.com)"]
	}
	if (formData.email.length > 254) {
		return ["📧 Email address is too long"]
	}

	// Check Phone Number
	if (!formData.phone || formData.phone.trim().length === 0) {
		return ["📱 Please enter your phone number"]
	}
	if (!validatePhone(formData.phone)) {
		return ["📱 Please enter a valid phone number (e.g., +62 812-3456-7890)"]
	}

	// Check Why Partner field
	if (!formData.whyPartner || formData.whyPartner.trim().length === 0) {
		return ["💭 Please tell us why you want to partner with TDR Racing"]
	}
	if (formData.whyPartner.trim().length < 50) {
		return [
			`💭 Please provide more details about why you want to partner with us (${
				formData.whyPartner.trim().length
			}/50 characters minimum)`,
		]
	}
	if (formData.whyPartner.length > 2000) {
		return ["💭 Partnership explanation is too long (maximum 2000 characters)"]
	}
	if (detectSpam(formData.whyPartner)) {
		return [
			"💭 Please provide a genuine explanation about your partnership interest",
		]
	}

	// Check required dropdown fields
	if (!formData.ownsMotorcycle || formData.ownsMotorcycle.trim().length === 0) {
		return ["🏍️ Please select whether you own a motorcycle"]
	}

	if (
		!formData.racingExperience ||
		formData.racingExperience.trim().length === 0
	) {
		return ["🏁 Please select your racing/track experience level"]
	}

	if (
		!formData.motorcycleKnowledge ||
		formData.motorcycleKnowledge.trim().length === 0
	) {
		return ["🔧 Please select your motorcycle knowledge level"]
	}

	// File validation (optional field, but validate if provided)
	if (formData.portfolioFile) {
		const file = formData.portfolioFile
		const maxSize = 10 * 1024 * 1024 // 10MB
		const allowedTypes = [
			"application/pdf",
			"image/jpeg",
			"image/jpg",
			"image/png",
			"application/msword",
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		]

		if (file.size > maxSize) {
			return [
				`📁 Portfolio file is too large (${(file.size / 1024 / 1024).toFixed(
					1
				)}MB). Maximum size is 10MB`,
			]
		}

		if (!allowedTypes.includes(file.type)) {
			return [
				"📁 Portfolio file type not supported. Please use PDF, JPG, PNG, DOC, or DOCX files only",
			]
		}
	}

	// All validations passed!
	return []
}

export const submitApplication = async (applicationData) => {
	try {
		// Client-side rate limiting check
		const rateCheck = checkClientRateLimit()
		if (!rateCheck.allowed) {
			throw new Error(rateCheck.reason)
		}

		// Skip validation here since it's already done in FormPage
		// const validationErrors = validateApplicationData(applicationData)
		// if (validationErrors.length > 0) {
		// 	throw new Error(validationErrors[0])
		// }

		// Sanitize all text inputs
		const sanitizedData = {
			...applicationData,
			full_name: sanitizeInput(applicationData.full_name),
			email: sanitizeInput(applicationData.email),
			phone: sanitizeInput(applicationData.phone),
			instagram_handle: sanitizeInput(applicationData.instagram_handle),
			tiktok_username: sanitizeInput(applicationData.tiktok_username),
			why_partner: sanitizeInput(applicationData.why_partner),
			racing_experience: sanitizeInput(applicationData.racing_experience),
			motorcycle_knowledge: sanitizeInput(applicationData.motorcycle_knowledge),
		}

		// Remove client_metadata since it's not in the database schema
		// Add default status if not provided
		const finalData = {
			...sanitizedData,
			status: sanitizedData.status || "pending", // Default status
		}

		console.log("Final data being sent to Supabase:", finalData)

		// Submit to Supabase
		const { data, error } = await supabase
			.from("tdr_applications")
			.insert([finalData])
			.select()

		if (error) {
			console.error("Supabase error:", error)

			// Handle specific error types
			if (
				error.message.includes("rate limit") ||
				error.message.includes("rate_limit")
			) {
				throw new Error(
					"Too many submissions. Please wait before trying again."
				)
			}

			if (
				error.message.includes("duplicate") ||
				error.message.includes("unique")
			) {
				throw new Error(
					"An application with this email was already submitted recently."
				)
			}

			if (
				error.message.includes("validation") ||
				error.message.includes("check constraint")
			) {
				throw new Error(
					"Some information provided is invalid. Please check your entries."
				)
			}

			throw new Error("Failed to submit application. Please try again later.")
		}

		// Record successful submission for rate limiting
		recordSubmission()

		return { success: true, data }
	} catch (error) {
		console.error("Error submitting application:", error)
		return {
			success: false,
			error: error.message || "An unexpected error occurred",
		}
	}
}

export const uploadFile = async (file, fileName) => {
	try {
		// Additional file validation
		const maxSize = 10 * 1024 * 1024 // 10MB
		if (file.size > maxSize) {
			throw new Error("File is too large (max 10MB)")
		}

		const allowedTypes = [
			"application/pdf",
			"image/jpeg",
			"image/jpg",
			"image/png",
			"application/msword",
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		]

		if (!allowedTypes.includes(file.type)) {
			throw new Error("File type not allowed")
		}

		// Generate secure filename
		const timestamp = Date.now()
		const randomString = Math.random().toString(36).substring(2, 15)
		const extension = fileName.split(".").pop()
		const secureFileName = `portfolios/${timestamp}_${randomString}.${extension}`

		const { data, error } = await supabase.storage
			.from("tdr-applications")
			.upload(secureFileName, file, {
				cacheControl: "3600",
				upsert: false,
			})

		if (error) {
			console.error("Upload error:", error)
			throw new Error(error.message || "Failed to upload file")
		}

		// Get the URL for the uploaded file
		const { data: urlData } = supabase.storage
			.from("tdr-applications")
			.getPublicUrl(secureFileName)

		return {
			success: true,
			url: urlData.publicUrl,
			path: secureFileName,
		}
	} catch (error) {
		console.error("Error uploading file:", error)
		return {
			success: false,
			error: error.message || "Failed to upload file",
		}
	}
}
