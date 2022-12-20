import styled from "styled-components"
import { useAuth } from "../providers/auth"
import trash from "../assets/images/Group.png"
import axios from "axios"

export default function ({id,name,days}){
const {objDays, BASE_URL,token}  =useAuth()


function deleteHabit(){

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,            
        },
    };
    axios.delete(`${BASE_URL}/${id}`, config)
    .then((res)=> { /*setStatus(!status)*/
//        setCreate(!create)
//                setSelectedDay("")
  //      setNewHabit("")
        console.log(res.data,"foi")})
    .catch((err) => console.log(err.response.data))

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