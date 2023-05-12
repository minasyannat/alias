import styles from './wordsList.module.css'

function WordsList(){
    return (
        <div className={styles.list}>
            <button>Word</button>
            <button>Word</button>
            <button>Word</button>
            <button>Word</button>
            <button>Word</button>
        </div>
    )
}

export default WordsList;