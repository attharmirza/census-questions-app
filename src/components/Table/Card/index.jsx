import styles from './index.module.css'

export default function Card(props) {
    const { dataSinglePlace } = props

    const parseLabel = (labelString) => {
        const labelParsed = labelString
            .replace(/(:!!)|(!!)|(:)/g, '|')
            .split('|')
            .filter(f => f.length > 0 && f !== 'Estimate')

        return labelParsed.map(label => (<span key={label} className={styles.label}>{label}</span>))
    }

    const categories = dataSinglePlace.CATEGORIES.map(d =>
    (
        <div key={d.ID} className={styles.category}>
            <div>
                <span className={`press-start-2p-regular ${styles.value}`}>{(+d.VALUE).toLocaleString('en-US')}</span>
            </div>
            <div>
                <span className={styles.labels}>{parseLabel(d.LABEL)}</span>
            </div>
        </div>
    ))

    return (
        <>
            <div className={styles.container}>
                <div className={`alfa-slab-one-regular ${styles.place}`}>{dataSinglePlace.NAME}</div>
                <div className={styles.categories}>
                    {categories}
                </div>
            </div>
        </>
    )
}