export default function Icon({ name, children }) {
	return (
		<div className="flex flex-col items-center gap-1 text-pink-300">
			<img
				src={`imgs/${name}`}
				className="h-10 w-fit rounded-lg sm:h-16"
			/>
			{children}
		</div>
	);
}
