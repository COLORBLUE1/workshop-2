import styled from "styled-components";

// styled-components login

export const ContainerLogin = styled.div`
width: 100vw;
height: 100vh;
background-color: #F8F8F8;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ContainerTituloLogin = styled.div`
width: 100%;
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px 0;
`

export const ImagenLogoLogin = styled.img`
width: 190px;
height: 40px;
`

export const TituloLogin = styled.h1`
margin: 30px 0;
color: #2F2F2F;
font-size: 3em
`

export const ContainerFormLogin = styled.div`
width: 100%;
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px 0;
`

export const Formulario = styled.form`
width: 340px;
display: flex;
flex-direction: column;
`

export const Label = styled.label`
font-size: 20px;
margin: 7px 15px;
color: #FF74FC;
font-weight: bold
`

export const Input = styled.input`
height: 40px;
border: 0;
border-radius: 50px;
background-color: #FFBC74;
padding-left: 15px;
margin-bottom: 30px;
font-size: 20px;

&::placeholder {
font-size: 16px;
}
`

export const Button = styled.button`
height: 40px;
border: 0;
border-radius: 50px;
margin: 10px 0;
background-color: #FF74B7;
font-size: 16px;
font-weight: bold;
`

export const IrCrearCuenta = styled.a`
cursor: pointer;
text-decoration: none;
color: #FF74FC;
font-weight: bold;
font-size: 18px;
`

// -----------------------------------------