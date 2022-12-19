import styled from "styled-components"

export default function Habit(props){

    const {id ,name, selected, handleDay} =props
    return(

        <>
        <ButtonDay onClick={()=> handleDay(id,selected)}>
            {name}
        </ButtonDay>
        
        </>
    )
}


const ButtonDay =styled.button`
width:30px;
height:30px;
margin-right:4px;
background-color:#FFFFFF;
border:1px solid #D4D4D4;
border-radius:5px;
color:#D4D4D4;
`