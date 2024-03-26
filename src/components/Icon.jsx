export default function Icon({ name, children }) {
	return (
		<div className="flex flex-col items-center gap-1">
			<img src={`imgs/${name}`} className="h-10 rounded-lg sm:h-16" />
			{children}
		</div>
	);
}
