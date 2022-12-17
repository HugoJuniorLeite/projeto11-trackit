import React, { useEffect, useState } from "react";
import logo from "../assets/images/tracklt.svg"


export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [user, setUser] = useState({
        
    })

    useEffect(() =>{
        const userStorage = localStorage.getItem("user");
        if(userStorage){
            setUser(JSON.parse(userStorage))
        } else {
                setUser({
                email:"",
                name:"",
                password:"",
                urlPhoto:"",
                image: logo,
                imageDescription: "imagem do logo da tricklt"

            });
        }
    },[])




    return(
        <AuthContext.Provider value={{user,setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth =() => React.useContext(AuthContext)