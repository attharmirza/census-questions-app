import styles from './index.module.css'
import { getData } from '../../helpers'
import { useRef, useState, useEffect } from 'react'

export default function Input(props) {
    const { loadingStatus, censusData } = props

    const inputRef = useRef(null)
    const [isLoading, setIsLoading] = useState(false)

    const sendPrompt = async () => {
        setIsLoading(true)

        let data

        try {
            data = await getData(inputRef.current.value)
        } catch (err) {
            data = undefined
            console.error(err)
        }

        setIsLoading(false)
        censusData(data)
    }

    useEffect(() => {
        loadingStatus(isLoading)
    }, [isLoading])

    return (
        <>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type="search"
                    id="census-gemini-search"
                    name="question"
                    placeholder='Type a question...'
                    ref={inputRef}
                />
                <button
                    className={[
                        styles.button,
                        isLoading ? '' : 'background-animation',
                        isLoading ? styles['button-disabled'] : styles['button-enabled']
                    ].join(' ')}
                    onClick={sendPrompt}
                >
                    Ask
                </button>
            </div>
        </>
    )
}