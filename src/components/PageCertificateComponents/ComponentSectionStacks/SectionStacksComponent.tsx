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
                        <Image
                            className={styles.itemlanguage__logo}
                            alt={`logo ${knowledge.name}`}
                            src={knowledge.logo}
                            height={32}
                            width={32}
                        />
                    </div>
                </li>)}
            </ul>
        </section>
    </>
}
