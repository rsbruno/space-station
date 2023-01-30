import { Cards } from '@/components/Cards'
import styles from '@/styles/certificates.module.scss'
import certificates from '@/mocks/certificates.json'
import knowledges from '@/mocks/knowlodge.json'
import { HorizontalDividerComponent } from '@/components/ComponentHorizontalDivider/HorizontalDividerComponent'
import { SectionKnowlodgeComponent } from '@/components/ComponentKnowlodgeItens/KnowlodgeItensComponent'
import { useEffect, useState } from 'react'

function CertificatesPage() {

    const [studyng, setStudyng] = useState<typeof knowledges>([]);
    const [experient, setExperient] = useState<typeof knowledges>([]);
    const [interest, setInteres] = useState<typeof knowledges>([]);

    useEffect(() => {
        setExperient(knowledges.filter(f => f.experience == 'EXPERIENT'))
        setInteres(knowledges.filter(f => f.experience == 'INTEREST'))
        setStudyng(knowledges.filter(f => f.experience == 'STUDYNG'))
    }, [])


    return (
        <aside className={styles.container}>
            <section className={styles.container__certificates}>
                <div className={styles.container__certificates__container}>
                    {certificates.map(certificate => <Cards.CertificateComponent key={certificate.id} {...certificate} />)}
                </div>
            </section>
            <section className={styles.knowledge}>
                <div className={styles.knowledge__container}>
                    <h1 className={styles.knowledge__container__title}>Tecnologias e Frameworks</h1>
                    <div className={styles.knowledge__container__components}>
                        <SectionKnowlodgeComponent title='Tenho experiência' knowledges={experient} />
                        <HorizontalDividerComponent size={60} bgDividerColor='#3C3C42' />
                        <SectionKnowlodgeComponent title='Estou estudando' knowledges={studyng} />
                        <HorizontalDividerComponent size={60} bgDividerColor='#3C3C42' />
                        <SectionKnowlodgeComponent title='Tenho interesse' knowledges={interest} />
                    </div>

                </div>

            </section>


        </aside>
    )

}

export default CertificatesPage;