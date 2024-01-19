export default function Icon({ name, children }) {
	return (
		<div className="flex flex-col gap-1 text-pink-300">
			<img src={`imgs/${name}`} className="h-16 rounded-lg" />
			{children}
		</div>
	);
}
