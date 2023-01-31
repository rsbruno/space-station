import Image from 'next/image';
import styles from './SectionStacksStyles.module.scss'

interface ISectionStacksComponentProps {
    title: string;
    stacks: IStack[]
}
export function SectionStacksComponent(props: ISectionStacksComponentProps) {
    return <>
        <section className={styles.listexperience}>
            <h2 className={styles.listexperience__title}>{props.title}</h2>
            <ul>
                {props.stacks.map(knowledge => <li key={knowledge.id}>
                    <div className={styles.itemlanguage}>
                        <Image src={knowledge.logo} alt="" className={styles.itemlanguage__logo} />
                    </div>
                </li>)}
            </ul>
        </section>
    </>
}
