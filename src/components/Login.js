/*import { useState } from "react"
import { useAuth } from "../providers/auth"
import {ThreeDots } from  'react-loader-spinner'
import { Link } from "react-router-dom"


export default function Login (){
    const [input, setInput]=useState(
        {name:'',
    })
    const {user, setUser} =useAuth()

function handleLogin(){
 localStorage.setItem('user',JSON.stringify(input))   
 setUser(input)
    }

//function handleLogout(){
//localStorage.removeItem("user");
//setUser({
  //  name:""
//})

//}

    return(
        <>
        <img src={user.image} alt={user.imageDescription}></img>
        <div>{user.name}</div>
        <form onSubmit={handleLogin}>

       <input type="e-mail" placeholder="e-mail" onChange={(e) => setInput({name: e.target.value})} required></input>
       <input type="password" placeholder="senha" onChange={(e) => setInput({name: e.target.value})} required></input>
        <button type="submit">Entrar</button>
       </form>
       <Link to="/cadastro"><span>Não tem uma conta? Cadastre-se!</span>
       </Link>
        
        </>
    )
}





*/