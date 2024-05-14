import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Code from "../Code";
import { useEffect } from "react";

export default function Hero() {
	const letterCount = useMotionValue(0);
	const baseText = "Hi I'm Thomas";

	useEffect(() => {
		const controls = animate(letterCount, baseText.length, {
			type: "tween",
			duration: 1,
			ease: "linear",
		});
		return controls.stop;
	}, [letterCount]);

	const rounded = useTransform(letterCount, latest => Math.round(latest));
	const titleText = useTransform(rounded, latest =>
		baseText.slice(0, latest),
	);

	return (
		<div className="mb-24 mt-24 text-center text-white">
			<motion.h1 className="font-tech text-4xl font-bold sm:text-6xl ">
				{titleText}
			</motion.h1>
			<p className="pt-2 text-lg tracking-wide">
				A front-end <Code>web</Code> developer.
			</p>
		</div>
	);
}
