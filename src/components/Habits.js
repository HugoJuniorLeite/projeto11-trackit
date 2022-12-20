import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { useAuth } from "../providers/auth"
import Habit from "./Habit"


export default function Habits({setStatus, status}){
    
    const {objDays,create,setCreate, BASE_URL, token,setListedHabites} =useAuth()
    
    const [newHabit, setNewHabit]=useState('');
    const [selectedDay, setSelectedDay] = useState([]);
    


  


    function handleSubmit(e){
        e.preventDefault();

        
            
            const body = { name:newHabit , days: [...selectedDay]} 
            
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
                setNewHabit("")
                })
            .catch((err) => console.log(err.response.data))
       
    }

    function handleDay(day){
        
    const isSelected = selectedDay.some((s) => s === day)

    if(isSelected){

        const newList = selectedDay.filter((s) => s !== day)
        setSelectedDay(newList)
     }   else{
        setSelectedDay([...selectedDay, day])
     }

    }

    
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