import styles from './index.module.css'

export default function Input() {
    return (
        <>
            <div className={styles.container}>
                <input 
                type="search"
                id="census-gemini-search"
                name="question"
                placeholder='Type a question...'
                />
                <button>Ask</button>
            </div>
        </>
    )
}