import React from 'react'
import {useDispatch} from 'react-redux'
import {love,love2,fifteen,fifteen2,fourty,fourty2, zero, thirty,thirty2} from '../actions/ActionNames'
import {Button,ButtonGroup} from 'react-bootstrap'
import './GroupsOfButton.css';


function GroupsOfButton() {

  
    const dispatch = useDispatch();

    

    return (
        <>
                 <div className="player1-buttons">
                 <ButtonGroup>
                    <Button className="btn"   type="button" onClick={()=>dispatch(love())}>Love</Button>
                    <Button className="btn" type="button" onClick={()=>dispatch(fifteen())}>Fifteen </Button>
                    <Button className="btn" type="button" onClick={()=>dispatch(thirty())}>Thirty</Button>
                    <Button className="btn" type="button" onClick={()=>dispatch(fourty())}>Fourty</Button>
                </ButtonGroup>
                 </div>
                 <div className="player2-buttons">
                 <ButtonGroup>
                    <Button className="btn"   type="button" onClick={()=>dispatch(love2())}>Love</Button>
                    <Button className="btn" type="button" onClick={()=>dispatch(fifteen2())}>Fifteen </Button>
                    <Button className="btn" type="button" onClick={()=>dispatch(thirty2())}>Thirty</Button>
                    <Button className="btn" type="button" onClick={()=>dispatch(fourty2())}>Fourty</Button>
                </ButtonGroup>
                 </div>
               
       
        </>
    )
}

export default GroupsOfButton
