import { Dice1, MoveRight } from "lucide-react"
import { motion } from "motion/react"

function ReasonsPage() {
	return (
		<div id="reasons" className="w-full min-h-screen">
			<motion.div
				className="flex flex-col lg:flex-row w-full p-4 lg:p-8 gap-6 lg:gap-8 mb-24"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.div
					className="w-full lg:w-1/2 flex justify-start items-start"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<h1 className="text-4xl lg:text-5xl font-medium text-start text-black leading-tight">
						Why You Should <br /> Join TDR Racing
					</h1>
				</motion.div>
				<motion.div
					className="w-full lg:w-1/2 text-black text-left"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<p className="mb-6 font-medium text-lg">
						Turn your passion for motorcycles into a career. Create content for
						TDR Racing's growing community of motorcycle enthusiasts and racers.
						Join us and be part of something bigger.
					</p>
					<p className="text-black/70 mb-6">
						As a TDR Racing content creator, you'll work with cutting-edge
						motorcycle technology, connect with fellow racing enthusiasts, and
						showcase the thrill of motorcycle culture to our global audience.
						Our team values passion, authenticity, and the drive to push
						boundaries.
					</p>
					<div className="flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
						<p className="text-black/70 underline">
							Learn More About TDR Racing
						</p>
						<MoveRight color="#000000" size={20} />
					</div>
				</motion.div>
			</motion.div>

			<motion.div
				className="flex flex-col md:flex-row w-full gap-6 md:gap-2 px-4 lg:px-8"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.div
					className="flex-1 text-center p-6 md:border-r md:pr-4 md:border-black bg-gray-50 md:bg-transparent rounded-lg md:rounded-none"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<h1 className="text-5xl lg:text-7xl font-medium text-black mb-3">
						100+
					</h1>
					<p className="text-black/70 text-base lg:text-base">
						Motorcycle racing events and content opportunities
					</p>
				</motion.div>
				<motion.div
					className="flex-1 text-center p-6 md:border-r md:pr-4 md:border-black bg-gray-50 md:bg-transparent rounded-lg md:rounded-none"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<h1 className="text-5xl lg:text-7xl font-medium text-black mb-3">
						50K+
					</h1>
					<p className="text-black/70 text-base lg:text-base">
						Engaged motorcycle enthusiasts in our community
					</p>
				</motion.div>
				<motion.div
					className="flex-1 text-center p-6 bg-gray-50 md:bg-transparent rounded-lg md:rounded-none"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<h1 className="text-5xl lg:text-7xl font-medium text-black mb-3">
						24/7
					</h1>
					<p className="text-black/70 text-base lg:text-base">
						Support for content creators and racing partnerships
					</p>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default ReasonsPage
