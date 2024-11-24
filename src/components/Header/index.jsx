import styles from './index.module.css'

export default function Header() {
    return (
        <>
            <div>
                <div className={styles.aideLogo}>
                    <img src="./img/robot-aide.png" alt="Robot AIde icon" />
                </div>

                <h1 className={`${styles.container} fs-lg alfa-slab-one-regular`}>
                    Census Newsroom <span className='press-start-2p-regular silkscreen-bold fs-headline text-animation'>AI</span>de
                </h1>

                <p className={`${styles.description}`}>
                    An AI powered reporter's tool to query, collect, analyze and visualize <a className="fs-link" target="_blank" rel="noopener noreferrer" href='https://www.census.gov/'><b>census data</b></a>.
                </p>
            </div>
        </>
    )
}