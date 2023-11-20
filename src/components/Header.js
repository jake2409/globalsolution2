import styled from 'styled-components'
import NavBar from './NavBar'
import logotipoimg from '../assets/logotipo.png'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: .7em 1.5em;
    color: #000;
`

const Logotipo = styled.div`
    background-image: url(${logotipoimg});
    height: 70px;
    background-size: cover;
    display: flex;
    width: 70px;
`


function Header() {
    return(
        <HeaderContainer>
            <Logotipo></Logotipo>
            <NavBar/>
        </HeaderContainer>
    )
}

export default Header