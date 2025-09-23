import { motion } from "motion/react"

function StepPage() {
	return (
		<div id="process" className="w-full min-h-screen">
			<motion.section
				className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-20"
				style={{
					backgroundImage: `url("https://res.cloudinary.com/dpsofmxsd/image/upload/v1758605752/vivid-blurred-colorful-wallpaper-background_j1cdzr.jpg")`,
				}}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<motion.div
					className="flex flex-col justify-center items-center w-full h-full p-8"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<motion.div
						className="w-full flex flex-col justify-center items-start p-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<motion.h1
							className="text-xl text-white font-medium"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							viewport={{ once: true }}
						>
							4 Simple Steps
						</motion.h1>
						<motion.p
							className="text-6xl font-medium max-w-xl text-left text-white"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							viewport={{ once: true }}
						>
							Effortless Process, Continuous Growth.
						</motion.p>
						<motion.div
							className="divider before:bg-white after:bg-white"
							initial={{ opacity: 0, scaleX: 0 }}
							whileInView={{ opacity: 1, scaleX: 1 }}
							transition={{ duration: 0.8, delay: 1 }}
							viewport={{ once: true }}
						></motion.div>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mb-8"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true, amount: 0.2 }}
					>
						<motion.div
							className="group"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							viewport={{ once: true }}
						>
							<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 min-h-[400px] flex flex-col justify-between hover:bg-white/15 transition-all duration-300 hover:scale-105">
								<div>
									<div className="text-4xl font-medium text-white mb-6">
										01.
									</div>
									<h3 className="text-xl font-medium text-white mb-6">
										Apply to Join
									</h3>
								</div>
								<p className="text-white/80 leading-relaxed">
									Submit your application with your social media profiles and
									creator portfolio for review.
								</p>
							</div>
						</motion.div>
						<motion.div
							className="group"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							viewport={{ once: true }}
						>
							<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 min-h-[400px] flex flex-col justify-between hover:bg-white/15 transition-all duration-300 hover:scale-105">
								<div>
									<div className="text-4xl font-medium text-white mb-6">
										02.
									</div>
									<h3 className="text-xl font-medium text-white mb-6">
										Get Verified
									</h3>
								</div>
								<p className="text-white/80 leading-relaxed">
									Our team reviews your profile and verifies your content
									quality and engagement metrics.
								</p>
							</div>
						</motion.div>

						<motion.div
							className="group"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							viewport={{ once: true }}
						>
							<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 min-h-[400px] flex flex-col justify-between hover:bg-white/15 transition-all duration-300 hover:scale-105">
								<div>
									<div className="text-4xl font-medium text-white mb-6">
										03.
									</div>
									<h3 className="text-xl font-medium text-white mb-6">
										Match with Brands
									</h3>
								</div>
								<p className="text-white/80 leading-relaxed">
									Get matched with premium brands that align with your niche and
									audience demographics.
								</p>
							</div>
						</motion.div>

						<motion.div
							className="group"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.9 }}
							viewport={{ once: true }}
						>
							<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 min-h-[400px] flex flex-col justify-between hover:bg-white/15 transition-all duration-300 hover:scale-105">
								<div>
									<div className="text-4xl font-medium text-white mb-6">
										04.
									</div>
									<h3 className="text-xl font-medium text-white mb-6">
										Start Earning
									</h3>
								</div>
								<p className="text-white/80 leading-relaxed">
									Begin your campaigns and start earning from premium brand
									partnerships immediately.
								</p>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						className="w-full mx-auto px-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}
					>
						<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/15 transition-all duration-300">
							<div className="flex items-center gap-4 flex-1">
								<div className="flex -space-x-3">
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white/30 flex items-center justify-center">
										<span className="text-white font-semibold text-sm">A</span>
									</div>
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white/30 flex items-center justify-center">
										<span className="text-white font-semibold text-sm">B</span>
									</div>
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white/30 flex items-center justify-center">
										<span className="text-white font-semibold text-sm">C</span>
									</div>
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white/30 flex items-center justify-center">
										<span className="text-white font-semibold text-sm">D</span>
									</div>
								</div>

								<div className="text-left">
									<p className="text-white/90 text-lg font-medium">
										Join Creators who{" "}
										<span className="font-semibold">Choose Quality</span>
									</p>
								</div>
							</div>

							<div className="flex-shrink-0">
								<button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
									<span>Start Now</span>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	)
}

export default StepPage
