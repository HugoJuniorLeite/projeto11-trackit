import Header from "../../components/Header"
import Footer from "../../components/Footer"
import axios from "axios"
import { useEffect } from "react"
import { useAuth } from "../../providers/auth"
import styled from "styled-components"

export default function HomePage (){

    const {habits, setHabits, BASE_URL,token} = useAuth()

    
    console.log(token,"token")
    useEffect(()=>{
       
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                
            },
        };
        axios.get(`${BASE_URL}/habits`, config)
        .then((res)=> {setHabits(res.data)
            console.log(habits,"foi")})
        .catch((err) => console.log(err.response.data))
    },[])

    return(
        <>
            <Header/>
        
            <ContainerHomePage>
                <span>
                <h1>Meus hábitos</h1>
                <button>+</button>
                </span>
                <h2>Você não tem nenhum hábito cadastrado ainda.
                Adicione um hábito para começar a trackear!
                </h2>       
                </ContainerHomePage>
            <Footer/>
        </>
        )
}

const ContainerHomePage = styled.main`
width:375px;
min-height:527px;
padding-top:70px;
padding-bottom:80px;
span{
    height:77px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 0 18px 0 17px;
}
h1{
    font-family: 'Lexend Deca';
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color:#126BA5;
}
h2{
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin: 28px 0 20px 0;
}
button{
    width:40px;
    height:35px;
    background-color:#52B6FF;
    border: 1px solid #52B6FF;
    border-radius: 4.64px;
    font-family: 'Lexend Deca';
    font-size: 27px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color:#FFFFFF;

}
`
