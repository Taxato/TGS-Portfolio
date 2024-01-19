import Icon from "../Icon";
import IconText from "../IconText";
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
					<IconText>React</IconText>
				</Icon>
				<Icon name="react-router-logo.svg">
					<IconText>ReactRouter</IconText>
				</Icon>
				<Icon name="tailwind-logo.svg">
					<IconText>Tailwind</IconText>
				</Icon>
				<Icon name="bootstrap-logo.svg">
					<IconText>Bootstrap</IconText>
				</Icon>
				<Icon name="p5-logo.svg">
					<IconText>p5.js</IconText>
				</Icon>
			</IconRow>
			<P>Experience with a multitude of frameworks and libraries</P>
		</Section>
	);
}
