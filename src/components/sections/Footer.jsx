export default function Footer() {
	return (
		<footer className="m-auto w-[90%] text-center text-white text-opacity-60">
			<ul className="mb-5 flex justify-center gap-5">
				<li>
					<a href="https://www.linkedin.com/in/TGSolheim">
						<span className="font-extrabold">Linked</span>in
					</a>
				</li>
				<li>
					<a href="https://www.github.com/Taxato">
						<span className="font-bold">Git</span>Hub
					</a>
				</li>
				<li>
					<a href="mailto: thomas.solheim01@gmail.com" className="">
						<span className="font-bold">E</span>mail
					</a>
				</li>
			</ul>

			<p className="border-t border-t-stone-400 border-opacity-50 pt-5 tracking-wider">
				©️ 2024 Thomas G. Solheim
			</p>
		</footer>
	);
}
