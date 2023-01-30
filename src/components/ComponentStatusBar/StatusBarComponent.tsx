import styles from './StatusBarStyles.module.scss'

interface IStatusBarComponentProps {
    level: number
}

export function StatusBarComponent({ level }: IStatusBarComponentProps) {
    return <>
        <div className={styles.container}>
            <span className={styles.container__statusbar} />
            <small className={styles.container__leveltext}>{level}%</small>
        </div>
    </>
}