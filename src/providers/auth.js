import React, { useEffect, useState } from "react";
import logo from "../assets/images/tracklt.svg"

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [inputs, setInputs] = useState({
            email:"",
            name:"",
            image:"",
            password:""
        })

    const [user, setUser] =useState({
        email:"",
        password:"",    
   })

    const [habits, setHabits]=useState([])

    const images ={logo:logo, description: "imagem da tracklt"}
    const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"
    const [token,setToken]=useState('')

    useEffect(() =>{

        const tokenStorage = localStorage.getItem("token");
        if(tokenStorage){
            setToken(JSON.parse(tokenStorage))
        } else {
                setToken("");
        }
    

/*        const inputsStorage = localStorage.getItem("inputs");
        if(inputsStorage){
            setInputs(JSON.parse(inputsStorage))
        } else {
                setInputs({
                email:"",
                name:"",
                image:"",
                password:"",
            
            });
        }

        const userStorage = localStorage.getItem("user");
        if(userStorage){
            setUser(JSON.parse(userStorage))
        } else {
                setUser({
                email:"",
                password:"",    
                
            });
        }
        */
    },[])
    return(
        <AuthContext.Provider value={{user,setUser,inputs,setInputs,images,BASE_URL, habits,setHabits, token, setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth =() => React.useContext(AuthContext)