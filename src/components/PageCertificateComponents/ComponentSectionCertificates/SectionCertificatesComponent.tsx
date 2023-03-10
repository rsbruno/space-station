import { Cards } from '@/components/Cards';
import { HorizontalDividerComponent } from '@/components/ComponentHorizontalDivider/HorizontalDividerComponent'
import { PaginationComponent } from '@/components/ComponentPagination/PaginationComponent'
import { Inputs } from '@/components/Inputs'
import { useLayoutEffect } from 'react';
import styles from './SectionCertificatesStyles.module.scss'

interface ISectionCertificatesComponentProps {
    title: string;
    description?: string;
    certificates: ICertificate[];
    onRevalidatePagination: (page: number) => void;
    maxPages: number
}

export function SectionCertificatesComponent({ title, description, certificates, onRevalidatePagination, maxPages }: ISectionCertificatesComponentProps) {

    

    return <>
        <div className={styles.container}>
            <header className={styles.container__header}>
                <div className={styles.container__header__identity}>
                    <h1 className={styles.container__header__identity__title}>{title}</h1>
                    {description && <>
                        <h6 className={styles.container__header__identity__description}>{description}</h6>
                    </>}
                </div>
                <div className={styles.container__header__filters}>
                    <Inputs.SearchComponent theme='dark__primary' placeholder='Buscar: javascript, ReactJs, Java...' />
                </div>
            </header>
            <main className={styles.container__main}>
                <HorizontalDividerComponent size={80} />
                <section className={styles.container__main__listcertificates}>
                    {certificates.map(certificate => <Cards.CertificateComponent key={certificate.id} {...certificate} />)}
                </section>
                <PaginationComponent onCurrentPage={onRevalidatePagination} totalPages={maxPages} />
            </main>
        </div>
    </>
}