import Icon from "./Icon";

export default function LinkIcon({ name, link, children }) {
	return (
		<a className="transition-colors hover:text-pink-400" href={link}>
			<Icon name={name}>{children}</Icon>
		</a>
	);
}
