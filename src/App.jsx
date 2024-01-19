import Background from "./components/Background";
import Hero from "./components/sections/Hero";
import WebDevSection from "./components/sections/WebDevSection";
import FrameworksSection from "./components/sections/FrameworksSection";
import Footer from "./components/sections/Footer";

export default function App() {
	return (
		<main className="">
			<Hero />

			<WebDevSection />
			<FrameworksSection />

			<Footer />
			<Background />
		</main>
	);
}
