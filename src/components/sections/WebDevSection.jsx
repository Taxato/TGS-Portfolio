import Code from "../Code";
import H2 from "../H2";
import Icon from "../Icon";
import IconRow from "../IconRow";
import P from "../P";
import Section from "../Section";

export default function WebDevSection() {
	return (
		<Section>
			<H2>Competencies</H2>
			<IconRow>
				<Icon name="html-logo.svg" />
				<Icon name="js-logo.svg" />
				<Icon name="css-logo.svg" />
			</IconRow>
			<P>
				Proficient in <Code>HTML</Code>, <Code>JavaScript</Code> and{" "}
				<Code>CSS</Code>
			</P>
		</Section>
	);
}
