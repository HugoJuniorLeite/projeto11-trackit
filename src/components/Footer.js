import styled from "styled-components"

export default function Footer(){

    return(
        <ContainerFooter>
        <button>Hábitos</button>
        <button>Hoje</button>
        <button>Historico</button>  
        </ContainerFooter>
    )
}

const ContainerFooter =styled.footer`
display:flex;
justify-content:space-evenly;
align-items:center;
position:fixed;
bottom:0;
left:0;
width:375px;
height:70px;
background-color:#FFFFFF;
`