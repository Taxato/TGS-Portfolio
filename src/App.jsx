import Background from "./components/Background";
import Footer from "./components/sections/Footer";
import FrameworksSection from "./components/sections/FrameworksSection";
import GameDevelopment from "./components/sections/GameDevelopment";
import Hero from "./components/sections/Hero";
import WebDevSection from "./components/sections/WebDevSection";

export default function App() {
	return (
		<main className="h-full">
			<Hero />

			<WebDevSection />
			<FrameworksSection />

			<GameDevelopment />

			<Footer />
			<Background />
		</main>
	);
}
