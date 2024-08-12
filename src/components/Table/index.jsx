import styles from './index.module.css'
import Card from './Card'

export default function Table(props) {
    const { data } = props

    if (!data) return

    const cards = data.map(d => (<Card key={d.NAME} dataSingle={d}/>))

    return (
        <>
            <div className={styles.container} style={{gridTemplateRows: `auto repeat(${cards.length},1fr)`}}>
                <p className={styles.container}>{data[0].DESCRIPTION}</p>
                {cards}
                <button
                    className={`background-animation-wide ${styles.button}`}
                >
                    Download
                </button>
            </div>
        </>
    )
}