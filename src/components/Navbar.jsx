import { useState } from "react"
import { motion } from "motion/react"
import { Menu, X } from "lucide-react"

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "Why Join", href: "#reasons" },
		{ name: "Benefits", href: "#benefits" },
		{ name: "Process", href: "#process" },
		{ name: "Apply", href: "#apply" },
	]

	return (
		<>
			<div className="navbar bg-transparent absolute top-0 left-0 right-0 z-50 px-4 sm:px-8">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex-1">
						<img
							src="/hpz-logo-white.png"
							alt="HPZ Crew Logo"
							className="h-8 w-auto"
						/>
					</div>

					<div className="flex-none hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a href="#home" className="text-white hover:text-gray-200">
									Home
								</a>
							</li>
							<li>
								<a href="#reasons" className="text-white hover:text-gray-200">
									Why Join
								</a>
							</li>
							<li>
								<a href="#benefits" className="text-white hover:text-gray-200">
									Benefits
								</a>
							</li>
							<li>
								<a href="#process" className="text-white hover:text-gray-200">
									Process
								</a>
							</li>
							<li>
								<a
									href="#apply"
									className="text-white hover:text-gray-200 bg-white/10 rounded-lg"
								>
									Apply
								</a>
							</li>
						</ul>
					</div>

					<div className="flex-none lg:hidden">
						<button
							className="btn btn-ghost text-white"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="fixed top-16 left-0 right-0 z-40 bg-black/90 backdrop-blur-md lg:hidden"
				>
					<ul className="menu menu-vertical w-full text-white p-4">
						{navItems.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									className="text-white hover:text-gray-200 py-3"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</>
	)
}

export default Navbar
