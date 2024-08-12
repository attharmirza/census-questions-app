import styles from './index.module.css'

export default function Table(props) {
    const { data } = props

    const placeholder = (<p className={styles.paragraph}>Ask any question related to the latest year of U.S. Census data and get back the data needed to answer it (e.g. "What's the population of the United States broken down by age?").</p>)

    return (
        <>
            <div className={styles.container}>
                {data ? JSON.stringify(data) : placeholder}
            </div>
        </>
    )
}