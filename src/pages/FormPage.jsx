import {
	User,
	Mail,
	Phone,
	Instagram,
	MessageSquare,
	Upload,
	CheckCircle,
	AlertCircle,
} from "lucide-react"

import { motion } from "motion/react"
import { useState } from "react"
import {
	submitApplication,
	uploadFile,
	validateApplicationData,
} from "../lib/secure-supabase"
import toast, { Toaster } from "react-hot-toast"

function FormPage() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		instagramHandle: "",
		tiktokUsername: "",
		followerCount: "",
		contentFocus: [],
		whyPartner: "",
		ownsMotorcycle: "",
		racingExperience: "",
		motorcycleKnowledge: "",
		portfolioFile: null,
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null) 

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleCheckboxChange = (category, checked) => {
		setFormData((prev) => ({
			...prev,
			contentFocus: checked
				? [...prev.contentFocus, category]
				: prev.contentFocus.filter((item) => item !== category),
		}))
	}

	const handleFileChange = (e) => {
		const file = e.target.files[0]
		setFormData((prev) => ({
			...prev,
			portfolioFile: file,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus(null)

		const validationErrors = validateApplicationData(formData)

		if (validationErrors.length > 0) {
			setIsSubmitting(false)
			toast.error(validationErrors[0], {
				position: "top-center",
				duration: 6000,
			})
			return
		}

		const loadingToast = toast.loading(
			"🏍️ Validating and submitting your application...",
			{
				position: "top-center",
			}
		)

		try {
			let portfolioUrl = null
			let portfolioFilename = null

			if (formData.portfolioFile) {
				toast.loading("📁 Uploading portfolio file...", {
					id: loadingToast,
				})

				const uploadResult = await uploadFile(
					formData.portfolioFile,
					formData.portfolioFile.name
				)

				if (uploadResult.success) {
					portfolioUrl = uploadResult.url
					portfolioFilename = formData.portfolioFile.name
				} else {
					throw new Error(
						uploadResult.error || "Failed to upload portfolio file"
					)
				}
			}

			toast.loading("🏍️ Submitting application...", {
				id: loadingToast,
			})

			const applicationData = {
				full_name: formData.fullName,
				email: formData.email,
				phone: formData.phone,
				instagram_handle: formData.instagramHandle,
				tiktok_username: formData.tiktokUsername,
				follower_count: formData.followerCount,
				content_focus: formData.contentFocus,
				why_partner: formData.whyPartner,
				owns_motorcycle: formData.ownsMotorcycle,
				racing_experience: formData.racingExperience,
				motorcycle_knowledge: formData.motorcycleKnowledge,
				portfolio_url: portfolioUrl,
				portfolio_filename: portfolioFilename,
			}

			const result = await submitApplication(applicationData)

			if (result.success) {
				setSubmitStatus("success")
				toast.success(
					"🏁 Application submitted successfully! We'll review it and get back to you within 2-3 business days.",
					{
						id: loadingToast,
						duration: 6000,
						position: "top-center",
						style: {
							background: "#10B981",
							color: "white",
							fontWeight: "500",
						},
					}
				)

				setFormData({
					fullName: "",
					email: "",
					phone: "",
					instagramHandle: "",
					tiktokUsername: "",
					followerCount: "",
					contentFocus: [],
					whyPartner: "",
					ownsMotorcycle: "",
					racingExperience: "",
					motorcycleKnowledge: "",
					portfolioFile: null,
				})

				const fileInput = document.querySelector('input[type="file"]')
				if (fileInput) fileInput.value = ""
			} else {
				throw new Error(result.error || "Failed to submit application")
			}
		} catch (error) {
			console.error("Submission error:", error)
			setSubmitStatus("error")

			let errorMessage = "❌ Failed to submit application. Please try again."

			if (
				error.message.includes("rate limit") ||
				error.message.includes("Too many")
			) {
				errorMessage =
					"⏰ Please wait before submitting again. Rate limit exceeded."
			} else if (
				error.message.includes("duplicate") ||
				error.message.includes("already submitted")
			) {
				errorMessage =
					"📧 An application with this email was already submitted recently."
			} else if (
				error.message.includes("validation") ||
				error.message.includes("invalid")
			) {
				errorMessage = "❌ Please check your information and try again."
			} else if (
				error.message.includes("file") ||
				error.message.includes("upload")
			) {
				errorMessage =
					"📁 File upload failed. Please try a smaller file or different format."
			} else if (error.message.includes("Full name")) {
				errorMessage = "👤 " + error.message
			} else if (error.message.includes("email")) {
				errorMessage = "📧 " + error.message
			} else if (error.message.includes("phone")) {
				errorMessage = "📱 " + error.message
			} else if (error.message.includes("partner")) {
				errorMessage = "💭 " + error.message
			} else if (error.message.includes("Missing Supabase")) {
				errorMessage = "🔧 Configuration error. Please contact support."
			} else if (
				error.message.includes("network") ||
				error.message.includes("fetch")
			) {
				errorMessage =
					"🌐 Network error. Please check your connection and try again."
			}

			toast.error(errorMessage, {
				id: loadingToast,
				duration: 8000,
				position: "top-center",
				style: {
					background: "#EF4444",
					color: "white",
					fontWeight: "500",
				},
			})
		} finally {
			setIsSubmitting(false)
		}
	}
	return (
		<div id="apply" className="w-full min-h-screen bg-white py-16 lg:py-24">
			<Toaster />
			<motion.div
				className="container mx-auto px-4 lg:px-8"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.div
					className="w-full flex flex-col justify-center items-center mb-16 lg:mb-20"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<div className="inline-flex items-center px-4 py-2 bg-gray-50 border border-gray-200 text-sm mb-6 rounded-full">
						<span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
						TDR Racing Creator Program
					</div>
					<motion.h1
						className="text-4xl lg:text-6xl font-semibold text-center leading-tight mb-6 max-w-4xl text-black"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						Rev Up Your Content <br /> with TDR Racing
					</motion.h1>
					<motion.p
						className="max-w-lg text-center text-gray-600 text-lg leading-relaxed"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
					>
						Join the ultimate motorcycle content creator network and partner
						with TDR Racing for high-performance collaborations.
					</motion.p>
				</motion.div>

				<motion.div
					className="max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<form className="space-y-8" onSubmit={handleSubmit}>
						{submitStatus === "success" && (
							<motion.div
								className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
							>
								<CheckCircle className="text-green-600" size={24} />
								<div>
									<h3 className="text-green-800 font-semibold">
										Application Submitted Successfully!
									</h3>
									<p className="text-green-700">
										We'll review your application and get back to you within 2-3
										business days.
									</p>
								</div>
							</motion.div>
						)}

						{submitStatus === "error" && (
							<motion.div
								className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
							>
								<AlertCircle className="text-red-600" size={24} />
								<div>
									<h3 className="text-red-800 font-semibold">
										Submission Failed
									</h3>
									<p className="text-red-700">
										There was an error submitting your application. Please try
										again.
									</p>
								</div>
							</motion.div>
						)}
						<div className="space-y-6">
							<h2 className="text-2xl font-semibold text-black mb-6">
								Personal Information
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="flex flex-col">
									<label className="text-black font-medium mb-3 flex items-center gap-2">
										<User size={20} className="text-gray-600" />
										Full Name
									</label>
									<input
										type="text"
										name="fullName"
										value={formData.fullName}
										onChange={handleInputChange}
										className="input input-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
										placeholder="Enter your full name"
										required
									/>
								</div>

								<div className="flex flex-col">
									<label className="text-black font-medium mb-3 flex items-center gap-2">
										<Mail size={20} className="text-gray-600" />
										Email Address
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="input input-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
										placeholder="your.email@example.com"
										required
									/>
								</div>
							</div>

							<div className="flex flex-col">
								<label className="text-black font-medium mb-3 flex items-center gap-2">
									<Phone size={20} className="text-gray-600" />
									Phone Number
								</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									className="input input-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
									placeholder="+62 12-345 6789"
								/>
							</div>
						</div>

						<div className="space-y-6">
							<h2 className="text-2xl font-semibold text-black mb-6">
								Social Media Profiles
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="flex flex-col">
									<label className="text-black font-medium mb-3 flex items-center gap-2">
										<Instagram size={20} className="text-gray-600" />
										Instagram Url
									</label>
									<input
										type="text"
										name="instagramHandle"
										value={formData.instagramHandle}
										onChange={handleInputChange}
										className="input input-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
										placeholder="instagram.com/yourusername"
									/>
								</div>

								<div className="flex flex-col">
									<label className="text-black font-medium mb-3 flex items-center gap-2">
										<svg
											className="w-5 h-5 text-gray-600"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.84v5.79a2.84 2.84 0 0 1-2.79 2.84c-1.54 0-2.8-1.25-2.8-2.79a2.84 2.84 0 0 1 2.8-2.84c.25 0 .41.04.63.09V2.74c-.22-.04-.44-.04-.63-.04-3.23 0-5.84 2.61-5.84 5.84s2.61 5.84 5.84 5.84a5.81 5.81 0 0 0 5.84-5.79V7.81a6.68 6.68 0 0 0 4.25 1.54V6.69c-.58 0-1.14-.24-1.54-.63z" />
										</svg>
										TikTok Url
									</label>
									<input
										type="text"
										name="tiktokUsername"
										value={formData.tiktokUsername}
										onChange={handleInputChange}
										className="input input-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
										placeholder="tiktok.com/@yourusername"
									/>
								</div>
							</div>

							<div className="flex flex-col">
								<label className="text-black font-medium mb-3">
									Follower Count (Combined)
								</label>
								<select
									name="followerCount"
									value={formData.followerCount}
									onChange={handleInputChange}
									className="select select-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
								>
									<option value="">Select your range</option>
									<option value="1k-10k">1K - 10K followers</option>
									<option value="10k-50k">10K - 50K followers</option>
									<option value="50k-100k">50K - 100K followers</option>
									<option value="100k-500k">100K - 500K followers</option>
									<option value="500k+">500K+ followers</option>
								</select>
							</div>
						</div>

						<div className="space-y-6">
							<h2 className="text-2xl font-semibold text-black mb-6">
								Experience & Interests
							</h2>

							<div className="flex flex-col">
								<label className="text-black font-medium mb-3">
									Motorcycle Content Focus (Select all that apply)
								</label>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
									{[
										"Bike Reviews",
										"Racing Coverage",
										"Bike Modifications",
										"Performance Tuning",
										"Track Days",
										"Bike Shows & Events",
										"Motorcycle Tech",
										"Bike Culture",
										"DIY Tutorials",
									].map((category) => (
										<label
											key={category}
											className="flex items-center gap-2 cursor-pointer"
										>
											<input
												type="checkbox"
												checked={formData.contentFocus.includes(category)}
												onChange={(e) =>
													handleCheckboxChange(category, e.target.checked)
												}
												className="checkbox checkbox-sm border-gray-400"
											/>
											<span className="text-black">{category}</span>
										</label>
									))}
								</div>
							</div>

							<div className="flex flex-col">
								<label className="text-black font-medium mb-3 flex items-center gap-2">
									<MessageSquare size={20} className="text-gray-600" />
									Why do you want to partner with TDR Racing?
								</label>
								<textarea
									name="whyPartner"
									value={formData.whyPartner}
									onChange={handleInputChange}
									className="textarea textarea-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none h-32"
									placeholder="Tell us about your passion for motorcycle content and how you'd represent TDR Racing..."
									required
								></textarea>
							</div>

							<div className="flex flex-col">
								<label className="text-black font-medium mb-3">
									Do you own a motorcycle?
								</label>
								<select
									name="ownsMotorcycle"
									value={formData.ownsMotorcycle}
									onChange={handleInputChange}
									className="select select-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
									required
								>
									<option value="">Select an option</option>
									<option value="yes-modified">
										Yes, and it's modified for performance
									</option>
									<option value="yes-stock">Yes, but it's stock</option>
									<option value="yes-planning">
										Yes, planning modifications
									</option>
									<option value="no-planning">No, but planning to buy</option>
									<option value="no">No</option>
								</select>
							</div>

							<div className="flex flex-col">
								<label className="text-black font-medium mb-3">
									Racing/Track Experience
								</label>
								<select
									name="racingExperience"
									value={formData.racingExperience}
									onChange={handleInputChange}
									className="select select-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
									required
								>
									<option value="">Select your experience level</option>
									<option value="professional">
										Professional motorcycle racer
									</option>
									<option value="amateur-competitive">
										Amateur competitive racing
									</option>
									<option value="track-days">
										Regular track day participant
									</option>
									<option value="occasional">Occasional track events</option>
									<option value="spectator">Racing spectator/fan</option>
									<option value="none">No racing experience</option>
								</select>
							</div>

							<div className="flex flex-col">
								<label className="text-black font-medium mb-3">
									Motorcycle Knowledge Level
								</label>
								<select
									name="motorcycleKnowledge"
									value={formData.motorcycleKnowledge}
									onChange={handleInputChange}
									className="select select-bordered w-full bg-white border-gray-300 text-black focus:border-black focus:outline-none"
									required
								>
									<option value="">Rate your motorcycle knowledge</option>
									<option value="expert">
										Expert - Professional mechanic/technician
									</option>
									<option value="advanced">
										Advanced - Extensive DIY experience
									</option>
									<option value="intermediate">
										Intermediate - Basic modifications/maintenance
									</option>
									<option value="beginner">
										Beginner - Learning about motorcycles
									</option>
									<option value="enthusiast">
										Bike enthusiast - Love motorcycles but limited technical
										knowledge
									</option>
								</select>
							</div>

							<div className="flex flex-col">
								<label className="text-black font-medium mb-3 flex items-center gap-2">
									<Upload size={20} className="text-gray-600" />
									Portfolio/Motorcycle Content (Optional)
								</label>
								<input
									type="file"
									onChange={handleFileChange}
									className="file-input file-input-bordered w-full bg-white border-gray-300 text-black"
									accept=".pdf,.doc,.docx,.jpg,.png,.mp4"
								/>
								<p className="text-gray-500 text-sm mt-2">
									Upload your motorcycle content, bike photos, videos, or
									collaboration examples
								</p>
							</div>
						</div>
						<div className="pt-8">
							<button
								type="submit"
								disabled={isSubmitting}
								className={`btn w-full text-white border-none py-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
									isSubmitting
										? "bg-gray-400 cursor-not-allowed"
										: "bg-black hover:bg-gray-800 hover:scale-105"
								}`}
							>
								{isSubmitting
									? "Submitting Application..."
									: "Submit Application"}
							</button>
							{submitStatus !== "success" && (
								<p className="text-gray-500 text-sm text-center mt-4">
									We'll review your application and get back to you within 2-3
									business days.
								</p>
							)}
						</div>
					</form>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default FormPage
