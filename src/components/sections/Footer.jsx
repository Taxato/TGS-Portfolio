export default function Footer() {
	return (
		<footer className="mx-auto w-[70%] pt-4 text-center text-white text-opacity-60">
			<ul className="mb-5 flex items-center justify-center">
				<li className="transition-colors hover:text-rose-500">
					<a href="https://www.linkedin.com/in/TGSolheim">
						<span className="font-extrabold">Linked</span>in
					</a>
				</li>
				<li className="mx-3 flex h-[40px] items-center border-x border-stone-400 border-opacity-50 px-3 transition-colors hover:text-rose-500">
					<a href="https://www.github.com/Taxato">
						<span className="font-bold">Git</span>Hub
					</a>
				</li>
				<li className="transition-colors hover:text-rose-500">
					<a href="mailto: thomas.solheim01@gmail.com" className="">
						<span className="font-bold">E</span>mail
					</a>
				</li>
			</ul>

			<p className="border-t border-t-stone-400 border-opacity-50 py-5 tracking-wider">
				©️ 2024 Thomas G. Solheim <br />
				<span className="text-sm italic">
					Fire created and captured by me
				</span>
			</p>
		</footer>
	);
}
