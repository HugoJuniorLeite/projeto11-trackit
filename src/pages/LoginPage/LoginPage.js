import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../providers/auth";

export default function LoginPage (){

    const {user, setUser, images, BASE_URL, setToken} = useAuth()
    const navigate=useNavigate()    

    function handleChangeLogin(e){

        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({...values, [name]: value}))

    }


    function handleSubmitLogin(e){
        e.preventDefault()
        
        const body = {email:user.email, password:user.password}        
        axios.post(`${BASE_URL}/auth/login`, body)
            .then((res) => {
              setUser(res.data)
              setToken(res.data.token)
              navigate('/habitos')})
            
              .catch((err) => alert(err.response.data.message))

    }
    
         return(
            <ContainerLogin>
            <img src={images.logo} alt={images.description}/>
            
        <form onSubmit={handleSubmitLogin}>
    
          <label>
          <input 
            placeholder="e-mail"
            type="email" 
            name="email" 
            value={user.email || ""}
            onChange={handleChangeLogin}
            required/>
            
          </label>
  
          <label>
            <input
                placeholder="senha"
              type="password" 
              name="password"
              value={user.password || ""}
              onChange={handleChangeLogin}
              required/>
            </label>
            <button type="submit">Entrar</button>
           
        </form>
            <Link to="/cadastro"><span>Não tem uma conta? Cadastre-se!</span>
            </Link>
    </ContainerLogin>
        )
}

const ContainerLogin =styled.main`
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