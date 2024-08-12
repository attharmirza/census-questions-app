import styles from './index.module.css'
import Card from './Card'

export default function Table(props) {
    const { data } = props

    if (!data) return

    const cards = data.map(d => (<Card key={d.NAME} dataSinglePlace={d}/>))

    return (
        <>
            <div className={styles.container} style={{gridTemplateRows: `auto`}}>
                <p className={`press-start-2p-regular ${styles.description}`}>Census Data Type: <span className='text-animation'>{data[0].DESCRIPTION}</span></p>
                {cards}
                <a
                    className={`background-animation-wide ${styles.button}`}
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`}
                    download='data.json'
                >
                    Download
                </a>
            </div>
        </>
    )
}