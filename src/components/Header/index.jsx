import styles from './index.module.css'

export default function Header() {
    return (
        <>
            <div className={styles.aideLogo}>
            <img src="./public/img/robot-aide.png" alt="Robot AIde icon" />
            </div>

            <h1 className={`${styles.container} fs-lg alfa-slab-one-regular`}>
            Newsroom <span className='press-start-2p-regular silkscreen-bold fs-headline text-animation'> Robot AI</span>de
            </h1>

            <p className={`${styles.description}`}>
              Your newsroom AIde to collect, analyze and visualize data from the U.S. Census.
            </p>
        </>
    )
}