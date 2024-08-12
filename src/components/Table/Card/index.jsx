import styles from './index.module.css'

export default function Card(props) {
    const { dataSingle } = props
    
    return (
        <>
            <div className={styles.container}>
                <div>{dataSingle.NAME}</div>
                <div>{JSON.stringify(dataSingle)}</div>
            </div>
        </>
    )
}