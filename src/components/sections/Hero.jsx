import { motion } from "framer-motion";
import Code from "../Code";

export default function Hero() {
	return (
		<div className="mb-24 mt-24 text-center text-white">
			<motion.h1
				animate={{
					x: [-80, 0],
					opacity: [0, 1],
				}}
				transition={{
					ease: "easeInOut",
					duration: 0.7,
				}}
				className="font-tech text-4xl font-bold sm:text-6xl">
				Hi, I&apos;m Thomas
			</motion.h1>

			<motion.h3
				animate={{
					x: [80, 0],
					opacity: [0, 1],
				}}
				transition={{
					duration: 0.7,
					ease: "easeInOut",
				}}
				className="pt-2 text-lg tracking-wide">
				A front-end <Code>web</Code> developer.
			</motion.h3>
		</div>
	);
}
