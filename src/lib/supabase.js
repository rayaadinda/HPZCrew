import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error(
		"Missing Supabase environment variables. Please check your .env file."
	)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table structure for TDR Racing applications
export const TABLE_NAME = "tdr_applications"

// Helper function to submit form data
export const submitApplication = async (formData) => {
	try {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.insert([formData])
			.select()

		if (error) {
			throw error
		}

		return { success: true, data }
	} catch (error) {
		console.error("Error submitting application:", error)
		return { success: false, error: error.message }
	}
}

// Helper function to upload files to Supabase Storage
export const uploadFile = async (file, fileName) => {
	try {
		const { data, error } = await supabase.storage
			.from("tdr-applications")
			.upload(`portfolios/${fileName}`, file)

		if (error) {
			throw error
		}

		// Get public URL
		const {
			data: { publicUrl },
		} = supabase.storage
			.from("tdr-applications")
			.getPublicUrl(`portfolios/${fileName}`)

		return { success: true, url: publicUrl }
	} catch (error) {
		console.error("Error uploading file:", error)
		return { success: false, error: error.message }
	}
}
