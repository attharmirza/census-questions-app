import styles from './index.module.css'
import Card from './Card'
import { useEffect, useState } from 'react'

export default function Table(props) {
    const { data } = props

    const [content, setContent] = useState(null)

    useEffect(() => {
        if (data === 'ERROR') {
            setContent((<p className={`press-start-2p-regular ${styles.description} ${styles.error}`}>Error Fetching Data</p>))
        } else if (data) {
            const cards = data.map(d => (<Card key={d.NAME} dataSinglePlace={d} />))

            setContent((
                <>
                    <p className={`press-start-2p-regular ${styles.description}`}>Census Data Type: <span className='text-animation'>{data[0].DESCRIPTION}</span></p>
                    {cards}
                    <a
                        className={`background-animation-wide ${styles.button}`}
                        href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`}
                        download='data.json'
                    >
                        Download
                    </a>
                </>
            ))
        } else {
            setContent(null)
        }
    }, [data])

    return (
        <>
            <div className={styles.container} style={{ gridTemplateRows: `auto` }}>
                {content}
            </div>
        </>
    )
}