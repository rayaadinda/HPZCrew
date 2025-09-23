import { Zap, Users, TrendingUp, Target, Clock, BarChart3 } from "lucide-react"
import { motion } from "motion/react"

function BenefitPage() {
	return (
		<div id="benefits" className="w-full min-h-screen bg-white py-16 lg:py-24">
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
					<div className="inline-flex items-center text-black px-4 py-2 bg-gray-50 border border-gray-200 text-sm mb-6 rounded-full">
						<span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
						Exclusive TDR Racing Benefits
					</div>
					<motion.h1
						className="text-4xl lg:text-6xl font-semibold text-center leading-tight text-black mb-6 max-w-4xl"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						Join TDR Racing and Unlock <br /> Your Racing Content Potential
					</motion.h1>
					<motion.p
						className="max-w-lg text-center text-gray-600 text-lg leading-relaxed"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
					>
						Access exclusive racing events, cutting-edge motorcycle content, and
						professional growth in the motorcycle racing industry.
					</motion.p>
				</motion.div>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<motion.div
						className="flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<div className="mb-4">
							<Zap size={32} strokeWidth={1} className="text-gray-700" />
						</div>
						<h2 className="text-xl font-semibold mb-3 text-gray-900">
							Exclusive Racing Access
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Get exclusive access to TDR Racing events, behind-the-scenes
							content, and cutting-edge motorcycle technology.
						</p>
					</motion.div>

					<motion.div
						className="flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						viewport={{ once: true }}
					>
						<div className="mb-4">
							<Users size={32} strokeWidth={1} className="text-gray-700" />
						</div>
						<h2 className="text-xl font-semibold mb-3 text-gray-900">
							Racing Community
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Join a passionate community of motorcycle enthusiasts and racing
							professionals from around the world.
						</p>
					</motion.div>

					<motion.div
						className="flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="mb-4">
							<Target size={32} strokeWidth={1} className="text-gray-700" />
						</div>
						<h2 className="text-xl font-semibold mb-3 text-gray-900">
							Content Mentorship
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Learn from professional content creators and racing experts to
							elevate your motorcycle content.
						</p>
					</motion.div>

					<motion.div
						className="flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						viewport={{ once: true }}
					>
						<div className="mb-4">
							<TrendingUp size={32} strokeWidth={1} className="text-gray-700" />
						</div>
						<h2 className="text-xl font-semibold mb-3 text-gray-900">
							Channel Growth
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Maximize your reach with proven strategies for motorcycle content
							and racing audience engagement.
						</p>
					</motion.div>

					<motion.div
						className="flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="mb-4">
							<Clock size={32} strokeWidth={1} className="text-gray-700" />
						</div>
						<h2 className="text-xl font-semibold mb-3 text-gray-900">
							24/7 Support
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Get dedicated support for content creation and racing event
							coverage opportunities.
						</p>
					</motion.div>

					<motion.div
						className="flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.9 }}
						viewport={{ once: true }}
					>
						<div className="mb-4">
							<BarChart3 size={32} strokeWidth={1} className="text-gray-700" />
						</div>
						<h2 className="text-xl font-semibold mb-3 text-gray-900">
							Performance Analytics
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Track your success with detailed insights and optimize your
							motorcycle content strategy.
						</p>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default BenefitPage
