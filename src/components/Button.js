import styled from 'styled-components'

const ButtonForms = styled.button`
    width: 20%;
    height: 8%;
    align-self: self-end;
    margin-top: 20px;
    background-color: #fff;
    border: solid #FFC0CB 1px;

    &:hover{
        background-color: #FFC0CB;
        cursor: pointer;
    }
`

function Button(){
    return(
        <ButtonForms>Login</ButtonForms>
    )
}

export default Button