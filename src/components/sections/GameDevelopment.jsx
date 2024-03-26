import LinkIcon from "../LinkIcon";
import Section from "../Section";
import H2 from "./../H2";
import IconRow from "./../IconRow";
import IconText from "./../IconText";

export default function GameDevelopment() {
	return (
		<Section>
			<H2>Game Development</H2>
			<IconRow className="flex-col sm:flex-row">
				<LinkIcon
					name="mimirkoden-logo.png"
					link="https://www.github.com/funkweb/mimirkoden">
					<IconText>Mimirkoden</IconText>
				</LinkIcon>
				<LinkIcon
					name="raskeladden-logo.png"
					link="https://www.github.com/funkweb/spill6">
					<IconText>Raskeladden & Dovreslubben</IconText>
				</LinkIcon>
			</IconRow>
		</Section>
	);
}
