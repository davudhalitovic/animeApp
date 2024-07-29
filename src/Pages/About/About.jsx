import AboutUsCard from "../../Components/AboutCard/AboutUsCard";
import { Container } from "./About.Styled";

function About() {

    return (
        <Container>
            <AboutUsCard name="Davud Halitovic" github="https://github.com/davudhalitovic"/>
            <AboutUsCard name="Enes Korac" github="https://github.com/koracenes"/>
            <AboutUsCard name="Alem Bejtovic" github="https://github.com/Alem05"/>
        </Container>
    )
}

export default About;
