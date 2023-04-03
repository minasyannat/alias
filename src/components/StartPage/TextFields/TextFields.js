import {Button, TextField} from '@mui/material';
import styles from "./textFields.module.css"

function TextFields(){
    return (
        <div className={styles.textFields}>
            <TextField label="Team 1 name" variant="standard" />
            <TextField label="Team 2 name" variant="standard" />
            <Button variant="contained">Let's play</Button>
        </div>
    )
}

export default TextFields;