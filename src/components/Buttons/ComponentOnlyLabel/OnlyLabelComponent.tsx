import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from './OnlyLabelStyles.module.scss'

interface IOnlyLabelComponentProps extends HTMLAttributes<HTMLButtonElement> {
    label: string;
    active?: boolean;
}

export default function OnlyLabelComponent({ label, active = false, ...rest }: IOnlyLabelComponentProps) {
    return <>
        <button className={classNames({
            [styles.container]: true,
            [styles.container__active]: active
        })} {...rest}>
            <div className={styles.container__content}>
                <span className={styles.container__content__label}>{label}</span>
            </div>
        </button>
    </>
}