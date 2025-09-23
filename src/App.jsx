import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ReasonsPage from "./pages/ReasonsPage"
import BenefitPage from "./pages/BenefitPage"
import StepPage from "./pages/StepPage"
import FormPage from "./pages/FormPage"

function App() {
	const [count, setCount] = useState(0)

	return (
		<main className="scroll-smooth">
			<HomePage />
			<ReasonsPage />
			<BenefitPage />
			<StepPage />
			<FormPage />
			<Footer />
		</main>
	)
}

export default App
