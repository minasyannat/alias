import { useDispatch, useSelector } from 'react-redux'
import styles from './header.module.css'
import { useState, useEffect } from 'react'
import { setStage } from '../../../store/actionCreator'
import { STAGES } from '../../../helpers/constants/pages'


function Header() {

    const dispatch= useDispatch()
    const currentTeamName = useSelector(state => state[state.turn].name)
    const [secondsLeft, setSecondsLeft] = useState(5)

    useEffect(
        () => {
           const interval=setInterval(
            () => {
                setSecondsLeft(prev => {
                    if(prev === 0 ) {
                        clearInterval(interval)
                        return 0
                    }
                    return prev - 1
                })
        },
        1000)},
        []
    )

    useEffect(()=> {
        if(secondsLeft > 0)return;
        const action = setStage(STAGES.transition)
        dispatch(action)
    }, [secondsLeft])


    return(
        <div className={styles.header}>
            <p>{currentTeamName}</p>
            <p>{secondsLeft}</p>
        </div>
    )
}
export default Header