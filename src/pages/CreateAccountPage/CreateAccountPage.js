import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../providers/auth"
//import logo from "../../assets/images/track.svg"

export default function CreateAccountPage (){

    const [input, setInput]=useState(
        {email:"",
        name:"",
        password:"",
        urlPhoto:"",
    })


const {user,setUser} =useAuth()

    return(

        <>

        <img src={user.image} alt={user.imageDescription}/>
        <form action="#">

        <input type="e-mail" placeholder="e-mail" onChange={(e) => setInput({email: e.target.value})} required></input>
        <input type="password" placeholder="senha" onChange={(e) => setInput({password: e.target.value})} required></input>
        <input type="text" placeholder="nome" onChange={(e) => setInput({name: e.target.value})} required></input>
        <input type="url" placeholder="foto (link url)" onChange={(e) => setInput({urlPhoto: e.target.value})} required></input>
        
        <button type="submit">Entrar</button>
        </form>
        <Link to="/"><span>Já tem uma conta? Faça login!</span>
        </Link>

        <div>CreateAccountPage</div>
        </>
    )
}