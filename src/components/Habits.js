import { useState } from "react";
import styled from "styled-components"
import { useAuth } from "../providers/auth"
import Habit from "./Habit"

export default function Habits(){
    
    const {newHabit, setNewHabit,create} =useAuth()
    
    const [seats, setSeats] = useState([]);
    const [selectedDay, setSelectedDay] = useState(false);
    
    function handleChangeHabit(e){
        
        const name = e.target.name;
        const value = e.target.value;
        setNewHabit(values => ({...values, [name]: value}))
           console.log(newHabit)
    }


    function handleSubmit(e){
        e.preventDefault();

    }

    function handleDay(day, selected){

    
        setSelectedDay(!selectedDay)
          console.log(selectedDay,"dia")
         
    }
    
    return(
        <>
        {create===false ? '' :
        <FormCard onSubmit={handleSubmit}>
         
        <label>
        <InputHabit
        placeholder="nome do hábito"
        type="text"
        name="letra"
        value={newHabit.input.letra}
        onChange={handleChangeHabit}
        ></InputHabit>
        </label>
        
        <ContainerButton>
        {newHabit.days.map(e=>(<Habit
        key={e.weekday} id={e.id} name={e.name} handleDay={handleDay} selected={e.selecte}
        ></Habit>))}
        </ContainerButton>

        <ButtonSubmit type="submit">Salvar</ButtonSubmit>
        </FormCard>
        }</>

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

const FormCard =styled.form`
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