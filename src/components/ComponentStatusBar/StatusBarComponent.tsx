import styles from './StatusBarStyles.module.scss'

interface IStatusBarComponentProps {
    level: number
}

export function StatusBarComponent({ level }: IStatusBarComponentProps) {
    return <>
        <div className={styles.container}>
            <div className={styles.container__statusbar}>
                <span className={styles.container__statusbar__progress} style={{ width: `${level}%` }} />
            </div>
            {level < 100 && <>
                <small className={styles.container__leveltext}>{level}%</small>
            </>}
        </div>
    </>
}