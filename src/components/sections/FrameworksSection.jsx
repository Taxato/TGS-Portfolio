import Icon from "../Icon";
import P from "../P";
import Section from "../Section";
import H2 from "./../H2";
import IconRow from "./../IconRow";

export default function FrameworksSection() {
	return (
		<Section>
			<H2>Frameworks & Libraries</H2>
			<IconRow>
				<Icon name="react-logo.svg">
					<span>React</span>
				</Icon>
				<Icon name="tailwind-logo.svg">
					<span>Tailwind</span>
				</Icon>
				<Icon name="bootstrap-logo.svg">
					<span>Bootstrap</span>
				</Icon>
				<Icon name="p5-logo.svg">
					<span>p5.js</span>
				</Icon>
			</IconRow>
			<P>Experience with a multitude of frameworks and libraries</P>
		</Section>
	);
}
