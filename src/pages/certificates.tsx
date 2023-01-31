import { Cards } from '@/components/Cards'
import styles from '@/styles/certificates.module.scss'
import knowledges from '@/mocks/knowlodge.json'
import { HorizontalDividerComponent } from '@/components/ComponentHorizontalDivider/HorizontalDividerComponent'
import { SectionKnowlodgeComponent } from '@/components/ComponentKnowlodgeItens/KnowlodgeItensComponent'
import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { certificatesService } from '@/services/certificatesService'
import { Inputs } from '@/components/Inputs'

import { RiFilter2Line } from 'react-icons/ri'
import { PaginationComponent } from '@/components/ComponentPagination/PaginationComponent'
import { SectionCertificatesComponent } from '@/components/PageCertificateComponents/ComponentSectionCertificates/SectionCertificatesComponent'


export const getStaticProps: GetStaticProps = async () => {
    const certificatesFinisheds = await certificatesService.getAllByStatus("FINISHED")
    const certificatesProgress = await certificatesService.getAllByStatus("PROGRESS")
    return {
        props: { certificatesFinisheds, certificatesProgress }, // will be passed to the page component as props
    }
}


interface ICertificatesPageProps {
    certificatesFinisheds: ICertificate[]
    certificatesProgress: ICertificate[]
}

function CertificatesPage({ certificatesFinisheds, certificatesProgress }: ICertificatesPageProps) {
    return (
        <aside className={styles.container}>
            <section className={styles.container__certificates}>
                <SectionCertificatesComponent
                    title='Cursos/Bootcamps Concluídos'
                    description='Todos os cursos/bootcamps que já fiz/participei'
                    certificates={certificatesFinisheds}
                />
                <SectionCertificatesComponent
                    title='Cursos/Bootcamps Em Andamento'
                    description='Os últimos cursos/bootcamps que comecei a fazer'
                    certificates={certificatesProgress}
                />
            </section>
            <section className={styles.knowledge}>
                {/* <div className={styles.knowledge__container}>
                    <h1 className={styles.knowledge__container__title}>Tecnologias e Frameworks</h1>
                    <div className={styles.knowledge__container__components}>
                        <SectionKnowlodgeComponent title='Tenho experiência' knowledges={experient} />
                        <HorizontalDividerComponent size={60} bgDividerColor='#3C3C42' />
                        <SectionKnowlodgeComponent title='Estou estudando' knowledges={studyng} />
                        <HorizontalDividerComponent size={60} bgDividerColor='#3C3C42' />
                        <SectionKnowlodgeComponent title='Tenho interesse' knowledges={interest} />
                    </div>

                </div> */}

            </section>


        </aside>
    )

}

export default CertificatesPage;