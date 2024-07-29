import React from 'react'
import { Container, LogoContainer, UpperSection, LinkSection, LowerSection, Hr } from './Footer.styled'
import { Link } from 'react-router-dom'
import logo from '../Navigation/logo.png'

function Footer(){
    return(
        <Container>
            <UpperSection>
             <LogoContainer>
                <img src={logo} alt="" />
                <h2>AnimeApp</h2>
             </LogoContainer>
             <LinkSection>
                <Link to="/">Home</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/manga">Manga</Link>
                <Link to="/about">About</Link>
             </LinkSection>
            </UpperSection>
            <Hr />
            <LowerSection>
                <p>&copy; 2024 AnimeApp. All rights reserved.</p>
            </LowerSection>
        </Container>
    )
}

export default Footer