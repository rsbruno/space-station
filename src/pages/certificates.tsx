import { GetStaticProps } from 'next'
import styles from '@/styles/certificates.module.scss'

import { SectionCertificatesComponent } from '@/components/PageCertificateComponents/ComponentSectionCertificates/SectionCertificatesComponent'
import { SectionStacksComponent } from '@/components/PageCertificateComponents/ComponentSectionStacks/SectionStacksComponent'
import { HorizontalDividerComponent } from '@/components/ComponentHorizontalDivider/HorizontalDividerComponent'

import { certificatesService } from '@/services/certificatesService'
import { stackService } from '@/services/stackService'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = async () => {
    const certificatesFinisheds = await certificatesService.getAllByStatus("FINISHED")
    const certificatesProgress = await certificatesService.getAllByStatus("PROGRESS")
    const stacksExperient = await stackService.getAllByExperience("EXPERIENT")
    const stacksStudyng = await stackService.getAllByExperience("STUDYNG")
    return {
        props: { certificatesFinisheds, certificatesProgress, stacksExperient, stacksStudyng },
    }
}
interface ICertificatesPageProps {
    certificatesFinisheds: ICertificate[]
    certificatesProgress: ICertificate[];
    stacksExperient: IStack[];
    stacksStudyng: IStack[];
}

function CertificatesPage({ certificatesFinisheds, certificatesProgress, stacksExperient, stacksStudyng }: ICertificatesPageProps) {
    return <>
        <Head>
            <title>Certificados - Cursos/Bootcamps</title>
        </Head>
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
            <section className={styles.container__knowledge}>
                <div className={styles.college__container}>
                    <div className={styles.college__container__logo}>
                        <img src="/assets/instituitions/college_logo.jpg" alt="" className={styles.college__container__logo__img} />
                    </div>
                    <h2 className={styles.college__container__title}>Formação Acadêmica</h2>
                    <h6 className={styles.college__container__description}>Bacharelado em Ciência da Computação pela</h6>
                    <h6 className={styles.college__container__description}>Universidade Federal de Alfenas - UNIFAL</h6>
                </div>
                {/* <HorizontalDividerComponent size={50} /> */}
                <div className={styles.stackscontainer}>
                    <h2 className={styles.stackscontainer__title}>Tecnologias e Frameworks</h2>
                    <SectionStacksComponent title='Tenho Conhecimento' stacks={stacksExperient} />
                    <SectionStacksComponent title='Estou Estudando' stacks={stacksStudyng} />
                </div>
            </section>
        </aside>
    </>
}

export default CertificatesPage;