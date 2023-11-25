import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em 0;
`
const StyledLink = styled(Link)`
    color: #000;
    font-weight: bold;
    text-decoration: none;
    margin: 0 1em;
    &:hover{
        text-decoration: underline;
    }
`

function NavBar() {
    return(
        <NavBarContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="../../sobre.html">Sobre</StyledLink>
        </NavBarContainer>
    )
}

export default NavBar