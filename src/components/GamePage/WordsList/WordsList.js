import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import styles from './wordsList.module.css'
import { shuffleArray } from '../../../helpers/functions';
import { Check } from '@mui/icons-material';
import { useMemo, useState } from 'react';
import { setCorrectAnswers, setCorrectWord } from '../../../store/actionCreator';

function WordsList(){

    const dispatch = useDispatch()
    

    const shuffledlist = useSelector(state => shuffleArray(state.wordsLeft).slice(0,5));
    const list = useMemo(() => shuffledlist, [])
    const [page, setPage] = useState(0)
    // const currentTeamCorrectWords = useSelector(state => state[state.turn].correctWords)
    const [correctWords, setCorrectWord] = useState([])
    const currentTurn = useSelector(state => state.turn)
    const correctWordsRef = useRef(correctWords)


    const toggleWord = (e) => {
        const {name}= e.target
        if (correctWords.includes(name)) {
            setCorrectWord(prev => prev.filter(word => word !== name))
            return;
        }
        setCorrectWord(prev => ([...prev, name]))
    }
    useEffect(() => {
        if(correctWords === 5) {
            setPage(prev => prev+1)
        }
    }, [correctWords])

    useEffect(() => {
        
        const action = setCorrectAnswers(correctWords)
        dispatch(action)},
     [currentTurn])

    return (
        <div className={styles.list}>
        {
            list.slice(page*5, page*5+5).map(word=>{
                return (
                    <Button
                    key={word}
                    variant="contained"
                    color={correctWords.includes(word) ? 'success' : 'info'}
                    endIcon={correctWords.includes(word) ? <Check /> : null}
                    name = {word}
                    onClick = {toggleWord}
                    >
                        {word}

                    </Button>

                )
            })
            
        }
        </div>
    )

    }
export default WordsList;