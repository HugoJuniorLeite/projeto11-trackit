import styled from "styled-components"
import { useAuth } from "../providers/auth"
import trash from "../assets/images/Group.png"
import axios from "axios"
import { useEffect } from "react"

export default function ({id,name,days}){
    
    const {objDays, BASE_URL,token,status, setStatus}  =useAuth()
   
function deleteHabit(){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,            
        },
    };
    axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
    .then((res)=> {
        
        
        setStatus(!status)
      })
        .catch((err) => console.log(err))
        
    }
    


    return(
        <>
<ContainerHabito>

<p>{name}</p>

{objDays.map(day=>(
        <Button
        key={day.weekday} 
        day={day.id} 
        name={day.name}>
             
             {day.name}
             
             </Button>))}

             <div>
        <img src={trash} day={id} onClick={()=>deleteHabit(id)}></img>
        </div>
        </ContainerHabito>
        
        </>
    )
}

const ContainerHabito = styled.div`
position:relative;

width:340px;
height:91px;
margin-top:10px;
margin-left:18px;
margin-bottom:10px;
padding-top:13px;
padding-left:15px;
background-color:#FFFFFF;
p{
font-family: 'Lexend Deca';
font-size: 20px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
color:#666666;
}
div{
    position:absolute;
    top:12px;
    right:10px;
}
`


const Button =styled.button`
width:30px;
height:30px;
margin-right:4px;
background-color: ${props => props.isSelected === true ? "blue" : "#FFFFFF"};
border:1px solid #D4D4D4;
border-radius:5px;
color:#D4D4D4;
margin-top:8px;
`