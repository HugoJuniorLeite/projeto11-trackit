import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { useAuth } from "../providers/auth"
import Habit from "./Habit"


export default function Habits({setStatus, status}){
    
    const {/*newHabit, setNewHabit*/objDays,create,setCreate, BASE_URL, token,setListedHabites} =useAuth()
    
    const [newHabit, setNewHabit]=useState('');
    const [selectedDay, setSelectedDay] = useState([]);
    
//    const [status, setStatus] =useState(false)

  


    function handleSubmit(e){
        e.preventDefault();

        
            
            const body = { name:newHabit , days: [...selectedDay]} 
            console.log(body,"body")
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,            
                },
            };
            axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
            ,body, config)
            .then((res)=> {setStatus(!status)
                setCreate(!create)
//                setSelectedDay("")
                setNewHabit("")
                console.log(res.data,"foi")})
            .catch((err) => console.log(err.response.data))
       
    }

    function handleDay(day){
        
    const isSelected = selectedDay.some((s) => s === day)
//        console.log(isSelected,"isselected", selectedDay,"selectedDay")
    if(isSelected){
       
//            setStatus(!status)
        const newList = selectedDay.filter((s) => s !== day)
        setSelectedDay(newList)
     }   else{
        setSelectedDay([...selectedDay, day])
     }

    }
    console.log(selectedDay,"lista nova",newHabit,"new")
    
    return(
        <>
        {create===false ? '' :
        
        <Container>
         
        <label>
        <InputHabit
        placeholder="nome do hábito"
        type="text"
        id="title"
        value={newHabit}
        onChange={e => setNewHabit(e.target.value)}
        ></InputHabit>
        </label>
        
        <ContainerButton>
        {objDays.map(day=>(
        <Habit
        key={day.weekday} 
        day={day.id} 
        name={day.name} 
        handleDay={handleDay}
        isSelected={selectedDay.some((s) => s === day)}
      //  teste={status}
       ></Habit>))}
        </ContainerButton>

        <ButtonSubmit onClick={handleSubmit}>Salvar</ButtonSubmit>
        </Container>
        }
    </>
    )
}

const InputHabit = styled.input`
width: 303px;
height: 45px;
margin: 18px 18px 8px 19px;
margin-bottom:8px;
border: 1px solid #D4D4D4;
border-radius:5px;
::placeholder{
    padding-left:11px;
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color:#DBDBDB;
}
`

const Container =styled.main`
width: 340px;
height: 180px;
border-radius:5px;
border: 1px solid #FFFFFF;
background-color:#FFFFFF;
margin-left:17px;

`

const ContainerButton = styled.ul`
display:flex;
margin-left:19px;
`

const ButtonSubmit = styled.button`
margin-top:29px;
margin-left:240px;
margin-right:16px;
margin-bottom:15px;
`