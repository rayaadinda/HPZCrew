import { motion } from "motion/react"
import {
	Mail,
	Phone,
	MapPin,
	Instagram,
	Twitter,
	Youtube,
	Facebook,
} from "lucide-react"

function Footer() {
	return (
		<motion.footer
			className="bg-black text-white py-16 lg:py-20"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-3">
							<img
								src="/hpz-logo-white.png"
								alt="HPZ Crew Logo"
								className="h-10 w-auto"
							/>
						</div>
						<p className="text-gray-300 leading-relaxed">
							Empowering motorcycle content creators and racing enthusiasts to
							share their passion with the world. Join the ultimate racing
							community.
						</p>
						<div className="flex items-center gap-4">
							<motion.a
								href="#"
								className="p-2 bg-white/10 rounded-full hover:bg-red-600 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<Instagram size={20} />
							</motion.a>
							<motion.a
								href="#"
								className="p-2 bg-white/10 rounded-full hover:bg-red-600 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<Youtube size={20} />
							</motion.a>
							<motion.a
								href="#"
								className="p-2 bg-white/10 rounded-full hover:bg-red-600 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<Twitter size={20} />
							</motion.a>
							<motion.a
								href="#"
								className="p-2 bg-white/10 rounded-full hover:bg-red-600 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<Facebook size={20} />
							</motion.a>
						</div>
					</motion.div>

					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<h3 className="text-lg font-semibold text-white">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#home"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#reasons"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Why Join Us
								</a>
							</li>
							<li>
								<a
									href="#benefits"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Benefits
								</a>
							</li>
							<li>
								<a
									href="#process"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Process
								</a>
							</li>
							<li>
								<a
									href="#apply"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Apply Now
								</a>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<h3 className="text-lg font-semibold text-white">Programs</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Content Creator Program
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Racing Events Coverage
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Motorcycle Reviews
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Community Partnerships
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									Brand Collaborations
								</a>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						viewport={{ once: true }}
					>
						<h3 className="text-lg font-semibold text-white">Contact Us</h3>
						<ul className="space-y-4">
							<li className="flex items-center gap-3">
								<Mail size={18} className="text-red-400" />
								<a
									href="mailto:hello@tdrracing.com"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									hello@tdrracing.com
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Phone size={18} className="text-red-400" />
								<a
									href="tel:+1234567890"
									className="text-gray-300 hover:text-red-400 transition-colors"
								>
									+1 (234) 567-8900
								</a>
							</li>
							<li className="flex items-start gap-3">
								<MapPin size={18} className="text-red-400 mt-1" />
								<span className="text-gray-300">
									TDR Racing Headquarters
									<br />
									123 Racing Street
									<br />
									Speed City, RC 12345
								</span>
							</li>
						</ul>
					</motion.div>
				</div>
				<motion.div
					className="border-t border-gray-800 pt-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-400 text-sm">
							© 2025 TDR Racing. All rights reserved.
						</p>
						<div className="flex items-center gap-6">
							<a
								href="#"
								className="text-gray-400 hover:text-red-400 text-sm transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-red-400 text-sm transition-colors"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-red-400 text-sm transition-colors"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.footer>
	)
}

export default Footer
