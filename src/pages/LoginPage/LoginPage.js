import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
            <>
            <div>{user.email}</div>
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
                placeholder="password"
              type="password" 
              name="password"
              value={user.password || ""}
              onChange={handleChangeLogin}
              required/>
            </label>
    
    
            <input type="submit" />
        </form>
            <Link to="/cadastro"><span>Não tem uma conta? Cadastre-se!</span>
            </Link>
 
    </>
        )
}