export default function Background() {
	return (
		<div className="fixed left-0 top-0 -z-50 flex h-screen w-screen items-center justify-center overflow-hidden">
			<img
				src="imgs/fire.jpg"
				className="min-h-full min-w-full object-cover opacity-0 transition-opacity duration-1000"
				onLoad={e => (e.target.style.opacity = 0.35)}
			/>
		</div>
	);
}
