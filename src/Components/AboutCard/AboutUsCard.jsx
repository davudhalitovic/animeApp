import React from "react";
import { Button, Description, Name, Wrapper } from "./AboutCard.styled";
import avatar from "./avatar.png";

function AboutUsCard({name, github}) {
    return(
        <Wrapper>
            <Name>{name}</Name>
            <Description>Web Developer</Description>
            <a href={github}><Button>Github</Button></a>
        </Wrapper>
    )
}

export default AboutUsCard;