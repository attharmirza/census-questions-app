import styles from './index.module.css'
import Card from './Card'

export default function Table(props) {
    const { data } = props

    if (!data) return

    const cards = data.map(d => (<Card dataSingle={d}/>))

    return (
        <>
            <div className={styles.container} style={{gridTemplateRows: `repeat(${cards.length},1fr)`}}>
                {cards}
            </div>
        </>
    )
}