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

    const [newHabit, setNewHabit]=useState({
        'input':[{
        letra:""
        }],
        'days':[
        {id:1, name: "D", weekday: "Domingo", selecte:false},
        {id:2, name: "S", weekday: "Segunda-feira", selecte:false},
        {id:3, name: "T", weekday: "Terça-feira", selecte:false},
        {id:4, name: "Q", weekday: "Quarta-feira", selecte:false},
        {id:5, name: "Q", weekday: "Quinta-feira", selecte:false},
        {id:6, name: "S", weekday: "Sexta-feira", selecte:false},
        {id:7, name: "S", weekday: "Sabado", selecte:false}
    ]
})

const [create, setCreate] = useState(false)


const [listedHabites, setListedHabites] =useState([])

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
        <AuthContext.Provider value={{user,setUser,
        inputs,setInputs,
        images,
        BASE_URL,
        listedHabites, setListedHabites,
        newHabit,setNewHabit,
        token, setToken,
        create,setCreate,
       }}>
            
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth =() => React.useContext(AuthContext)