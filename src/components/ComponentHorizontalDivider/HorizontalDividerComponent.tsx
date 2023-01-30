import styles from './HorizontalDividerStyles.module.scss'

interface IHorizontalDividerComponentProps {
    size?: number;
    bgDividerColor?: string;
}

export function HorizontalDividerComponent({ size = 100, bgDividerColor }: IHorizontalDividerComponentProps) {
    return <>
        <div className={styles.container}>
            <span className={styles.container__divider} style={{ width: `${size}%`, background: bgDividerColor }} />
        </div>
    </>
}