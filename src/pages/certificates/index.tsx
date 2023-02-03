import { GetStaticProps } from 'next'
import styles from '@/styles/certificates.module.scss'

import { SectionCertificatesComponent } from '@/components/PageCertificateComponents/ComponentSectionCertificates/SectionCertificatesComponent'
import { SectionStacksComponent } from '@/components/PageCertificateComponents/ComponentSectionStacks/SectionStacksComponent'

import { certificatesService } from '@/services/certificatesService'
import { stackService } from '@/services/stackService'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

let DEFAULT_DATA_BY_PAGES = 8

const filterCertificates = (filter: ICertificate["stateCertificate"], page: number, byPage: number = DEFAULT_DATA_BY_PAGES) => {
    return `filter: { stateCertificate: { eq: "${filter}" }},first: ${byPage}, skip: ${page * DEFAULT_DATA_BY_PAGES}`
}


export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context)
    //Lida com as configurações iniciais dos certificados com status terminados
    let maxPages = await certificatesService.countData(`filter: { stateCertificate: { eq: "FINISHED" } }`)
    const finisheds = {
        data: await certificatesService.getAllByStatus(filterCertificates("FINISHED", 0, DEFAULT_DATA_BY_PAGES)),
        maxPages: Math.ceil(maxPages / DEFAULT_DATA_BY_PAGES)
    }

    //Lida com as configurações iniciais dos certificados com status em progresso
    maxPages = await certificatesService.countData(`filter: { stateCertificate: { eq: "PROGRESS" } }`)
    const progress = {
        data: await certificatesService.getAllByStatus(filterCertificates("PROGRESS", 0, DEFAULT_DATA_BY_PAGES)),
        maxPages: Math.ceil(maxPages / DEFAULT_DATA_BY_PAGES)
    }


    const stacksExperient = await stackService.getAllByExperience("EXPERIENT")
    const stacksStudyng = await stackService.getAllByExperience("STUDYNG")


    const certificates = {
        finisheds,
        progress
    }

    return {
        props: { certificates, stacksExperient, stacksStudyng },
    }
}
interface ICertificatesPageProps {
    certificates: {
        finisheds: IPagination<ICertificate[]>,
        progress: IPagination<ICertificate[]>
    }
    stacksExperient: IStack[];
    stacksStudyng: IStack[];
}

function CertificatesPage({ certificates, stacksExperient, stacksStudyng }: ICertificatesPageProps) {
    const [certificatesFinisheds, setcertificatesFinisheds] = useState<ICertificate[]>(certificates.finisheds.data);
    const [certificatesProgress, setcertificatesProgress] = useState<ICertificate[]>(certificates.progress.data);

    const revalidateFinishedsData = async (page: number) => {
        setcertificatesFinisheds(await certificatesService.getAllByStatus(filterCertificates("FINISHED", page)))
    }

    const revalidateProgressData = async (page: number) => {
        setcertificatesProgress(await certificatesService.getAllByStatus(filterCertificates("PROGRESS", page)))
    }

    return <>
        <Head>
            <title>Certificados - Cursos/Bootcamps</title>
        </Head>
        <aside className={styles.container}>
            <section className={styles.container__certificates}>
                <SectionCertificatesComponent
                    description='Todos os cursos/bootcamps que já fiz/participei'
                    onRevalidatePagination={revalidateFinishedsData}
                    maxPages={certificates.finisheds.maxPages}
                    certificates={certificatesFinisheds}
                    title='Cursos/Bootcamps Concluídos'
                    isLoading
                />
                <SectionCertificatesComponent
                    description='Os últimos cursos/bootcamps que comecei a fazer'
                    onRevalidatePagination={revalidateProgressData}
                    maxPages={certificates.progress.maxPages}
                    title='Cursos/Bootcamps Em Andamento'
                    certificates={certificatesProgress}
                />
            </section>
            <section className={styles.container__knowledge}>
                <div className={styles.college__container}>
                    <div className={styles.college__container__logo}>
                        <Image
                            className={styles.college__container__logo__img}
                            src="/assets/instituitions/college_logo.jpg"
                            alt="logo unifal"
                            height={150}
                            width={150}
                            priority
                        />
                    </div>
                    <h2 className={styles.college__container__title}>Formação Acadêmica</h2>
                    <h6 className={styles.college__container__description}>Bacharelado em Ciência da Computação pela</h6>
                    <h6 className={styles.college__container__description}>Universidade Federal de Alfenas - UNIFAL</h6>
                </div>
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