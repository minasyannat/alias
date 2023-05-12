import {Button, TextField} from '@mui/material';
import styles from "./textFields.module.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../store/actionCreator';

function TextFields(){

    const dispatch = useDispatch()
    const [userNames, setUserNames]=useState({
        team1:'',
        team2:''
    })

    const handleUserNameChange = (e) => {
        const {name, value} = e.target
        setUserNames(prev => {
            return {
                ...prev,
            [name]:value
            }
            
        })
    }

    const handleStartGameClick = () => {
        const action= setUserData(userNames)
        dispatch(action)
            
    }

    return (
        <div className={styles.textFields}>
            <TextField 
            label="Team 1 name"
            name='team1' 
            variant="standard"
            value={userNames.team1}
            onChange={handleUserNameChange}
            />
            <TextField
            label="Team 2 name"
            name='team2'
            variant="standard"
            value={userNames.team2}
            onChange={handleUserNameChange}
            />
            <Button
            variant="contained"
            onClick={handleStartGameClick}
            >
            Let's play
            </Button>
        </div>
    )
}

export default TextFields;