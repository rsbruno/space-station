import styles from './CertificateStyles.module.scss'
import { TbCertificate } from 'react-icons/tb'
import { StatusBarComponent } from '@/components/ComponentStatusBar/StatusBarComponent'
import { CiLocationArrow1 } from 'react-icons/ci'
import Image from 'next/image';

import Skeleton from '@mui/material/Skeleton'

interface ICertificateComponentProps {
    isLoading?: boolean;
    certificate?: ICertificate
}

export default function CertificateComponent({ certificate, isLoading = false }: ICertificateComponentProps) {
    return <>
        <aside className={styles.container}>
            {isLoading ? <>
                <Skeleton variant="rectangular" animation='wave' width="100%" height='70%' />
            </> : <>
                <main className={styles.container__details} style={{ background: certificate?.covercolor.hex }}>
                    <h3 className={styles.container__details__typecourse}>{`${certificate?.classification.name} > ${certificate?.stackStudied.name}`}</h3>
                    <div className={styles.container__details__course}>
                        {certificate?.logo && <>
                            <Image
                                alt={`imagem da stack ${certificate?.stackStudied.name} aplicada no curso`}
                                className={styles.container__details__course__logo}
                                src={certificate?.logo}
                                height={40}
                                width={40}
                            />
                        </>}
                        <h2 className={styles.container__details__course__name}>{certificate?.name}</h2>
                    </div>
                </main>
            </>}
            <footer className={styles.container__status}>
                <aside className={styles.container__status__institution} style={{ border: 'solid 1px transparent' }}>
                    {isLoading ? <>
                        <Skeleton variant="rectangular" animation='wave' width="100%" height='100%' />
                    </> : <>
                        <Image
                            alt={`logo da ${certificate?.instituition.name}`}
                            src={certificate?.instituition.logo || ""}
                            height={30}
                            width={30}
                        />
                    </>}
                </aside>
                <div className={styles.statuscontainer}>
                    <div className={styles.statuscontainer__content}>
                        {isLoading ? <>
                            <Skeleton variant="rectangular" animation='wave' width="100%" height='100%' />
                        </> : <>
                            <StatusBarComponent level={certificate?.stateLevel || 0} />
                            <div className={styles.certificatestatus}>
                                <h6 className={styles.certificatestatus__text}>
                                    {certificate?.stateLevel === 100 ? "Certificado disponível" : "Em andamento"}
                                </h6>
                            </div>
                        </>}
                    </div>
                    {isLoading ? null : <>
                        <span className={styles.statuscontainer__certificate} style={{ display: (certificate?.stateLevel || 0) < 100 ? "none" : "block" }}>
                            <TbCertificate size={25} stroke="#7ee195" />
                        </span>
                    </>}
                </div>
                {isLoading ? null : <>
                    <section className={styles.container__status__hover}>
                        <h2 className={styles.container__status__hover__text}>
                            {certificate?.stateLevel === 100 ? "Acessar certificado" : "Detalhar curso"}
                        </h2>
                        <span className={styles.container__status__hover__icon}>
                            <CiLocationArrow1 size={25} fill="#fff" />
                        </span>
                    </section>
                </>}
            </footer>
        </aside>
    </>
}