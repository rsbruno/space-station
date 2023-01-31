import styles from './TextInputStyles.module.scss'

import className from 'classnames'
import { HTMLAttributes } from 'react'

interface ITextInputComponentProps extends HTMLAttributes<HTMLInputElement> {
    theme: "dark__primary" | "dark__none"
}

export default function TextInputComponent({ theme, ...rest }: ITextInputComponentProps) {
    return <>
        <div className={className({
            [styles.container]: true,
            [styles.theme__dark__primary]: theme === 'dark__primary',
            [styles.theme__dark__none]: theme === 'dark__none',
        })}>
            <input type="text" className={styles.container__input} {...rest} />
        </div>
    </>
}