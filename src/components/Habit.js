import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Habit(props){

    const {day ,name, isSelected, handleDay} =props

    return(

        <>
        <ButtonDay item={day.selected} stat={isSelected} onClick={()=> handleDay(day)}>
            {name}
        </ButtonDay>
        
        </>
    )
}

const ButtonDay =styled.button`
width:30px;
height:30px;
margin-right:4px;
background-color: ${props => props.isSelected === true ? "blue" : "#FFFFFF"};
border:1px solid #D4D4D4;
border-radius:5px;
color:#D4D4D4;
`