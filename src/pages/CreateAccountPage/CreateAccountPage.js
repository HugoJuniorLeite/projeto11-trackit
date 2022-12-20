import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../providers/auth"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";



export default function CreateAccountPage() {

    const navigate = useNavigate()

    const { inputs, setInputs, images, BASE_URL } = useAuth()

    function handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()


        axios.post(`${BASE_URL}/auth/sign-up`, inputs)
            .then((res) => navigate('/'))
            .catch((err) => alert(err.respose.data))

    }

    return (

        <ContainerCreateAccount>

            <img src={images.logo} alt={images.description} />

            <form onSubmit={handleSubmit}>

                <label>
                    <input
                        placeholder="e-mail"
                        type="e-mail"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange} />
                </label>

                <label>
                    <input
                        placeholder="senha"
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange} />
                </label>

                <label>
                    <input
                        placeholder="nome"
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange} />
                </label>

                <label>
                    <input
                        placeholder="url da foto"
                        type="url"
                        name="image"
                        value={inputs.image || ""}
                        onChange={handleChange} />
                </label>

                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/"><span>Já tem uma conta? Faça login!</span>
            </Link>

            <div>{inputs.email}</div>
        </ContainerCreateAccount>
    )
}

const ContainerCreateAccount = styled.main`
width:375px;
height:658px;
display:flex; 
flex-direction:column;
align-items:center;
img{
  width:180px;
  height: 178.38px;
  margin-top:63px;
  margin-bottom:31.62px;
}
button{
    width:303PX;
    height:45px;
    margin-left:36px;
    margin-bottom:25px;
    background-color:#52B6FF;
    border-radius:4.64px;
    border: 1px solid #52B6FF;
    color:#FFFFFF;
    font-family: 'Lexend Deca';
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
  }
  span{
    color:#52B6FF;
    font-family: 'Lexend Deca';
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;


  }
  `