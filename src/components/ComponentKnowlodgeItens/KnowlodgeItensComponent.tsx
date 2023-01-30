import styles from './KnowlodgeItensStyles.module.scss'

interface ISectionKnowlodgeComponentProps {
    title: string;
    knowledges: any[]
}
export function SectionKnowlodgeComponent(props: ISectionKnowlodgeComponentProps) {
    return <>
        <section className={styles.listexperience}>
            <h2 className={styles.listexperience__title}>{props.title}</h2>
            <ul>
                {props.knowledges.map(knowledge => <li>
                    <div className={styles.itemlanguage}>
                        <img src={knowledge.logo} alt="" className={styles.itemlanguage__logo} />
                    </div>
                </li>)}
            </ul>
        </section>
    </>
}
