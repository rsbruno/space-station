import TextInputComponent from "../ComponentTextInput/TextInputComponent";
import { BsSearch } from 'react-icons/bs'
import styles from './SearchStyles.module.scss'
import { HTMLAttributes, useId } from "react";
import classNames from "classnames";

interface ISearchComponentProps extends HTMLAttributes<HTMLInputElement> {
    theme: "dark__primary" | "dark__none"
}


export default function SearchComponent({ theme, ...rest }: ISearchComponentProps) {
    const searchId = useId()

    return <>
        <div className={classNames({
            [styles.container]: true,
            [styles.theme__dark__primary]: theme === "dark__primary",
        })}>
            <label htmlFor={`search${searchId}`} className={styles.container__label}>
                <BsSearch size={20} fill="#FFF" />
            </label>
            <TextInputComponent id={`search${searchId}`} theme='dark__none' {...rest} />
        </div>
    </>
}