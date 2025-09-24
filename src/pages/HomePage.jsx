import Navbar from "../components/Navbar"
import { Star } from "lucide-react"
import { motion } from "motion/react"

function HomePage() {
	return (
		<div id="home" className="w-full min-h-screen">
			<Navbar />
			<section
				className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-16"
				style={{
					backgroundImage: `url("https://res.cloudinary.com/dpsofmxsd/image/upload/v1758594074/2840_uxdppn.jpg")`,
				}}
			>
				<div className="container mx-auto px-4 sm:px-8">
					<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 min-h-[80vh] text-white">
						<motion.div
							className="flex items-start lg:items-center justify-start order-1 lg:order-1"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<div className="w-full">
								<motion.div
									className="inline-flex items-center px-3 py-1 backdrop-blur-sm text-sm mb-4 rounded-full w-fit"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
								>
									<span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 shrink-0"></span>
									Elite Racing Content Creator Network
								</motion.div>
								<motion.h1
									className="text-4xl sm:text-5xl lg:text-7xl font-light mb-4"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									Rev Up Your <br /> Content Career <br /> with TDR Racing
								</motion.h1>
							</div>
						</motion.div>
						<motion.div
							className="flex items-start lg:items-center justify-start px-0 lg:px-8 order-2 lg:order-2"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
						>
							<div className="text-left">
								<motion.h2
									className="text-lg sm:text-xl lg:text-3xl max-w-lg font-light mb-6"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.6 }}
								>
									{" "}
									Access exclusive racing events, premium brand partnerships,
									and a community of racing enthusiasts.
								</motion.h2>

								<motion.div
									className="flex flex-col sm:flex-row gap-4"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.8 }}
								>
									<button
										className="px-4 py-2 bg-white text-black rounded-full w-fit hover:bg-gray-100 transition-colors duration-300"
										onClick={() => {
											document.getElementById("apply")?.scrollIntoView({
												behavior: "smooth",
											})
										}}
									>
										Join HPZ Crew Now!
									</button>
									<div className="flex items-center gap-3">
										<div className="avatar-group -space-x-2">
											<div className="avatar">
												<div className="w-6">
													<img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
												</div>
											</div>
											<div className="avatar">
												<div className="w-6">
													<img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
												</div>
											</div>
											<div className="avatar">
												<div className="w-6">
													<img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
												</div>
											</div>
											<div className="avatar">
												<div className="w-6">
													<img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
												</div>
											</div>
										</div>
										<div className="flex items-center gap-1">
											<Star color="#fcff42" size={16} fill="#fcff42" />
											<span className="text-sm font-medium">
												4.9 Creator Rating
											</span>
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomePage
