import styled from "styled-components"
import { useAuth } from "../providers/auth"
//import backgroundColorHeader from "../constants/colors/backgroundColorHeader"

export default function Header(){

    const {user} =useAuth()
    return(
        <>
        <ContainarHeader>
        <span>Tracklt</span>
        <img src={user.image} alt="foto do usuário"></img>
        </ContainarHeader>

        </>
    )
}

const ContainarHeader =styled.header`
position: fixed;
top:0;
left:0;
z-index:3;
display:flex;
justify-content:space-between;
align-items:center;
width:375px;
height: 70px;
background-color:#126BA5;
span{
font-family: 'Playball';
color:#FFFFFF;
font-size: 39px;
font-weight: 400;
line-height: 49px;
letter-spacing: 0em;
text-align: left;
margin-left:18px;
}
img{
width:51px;
height: 51px;
border-radius:50%;
margin-right:18px;
}
`