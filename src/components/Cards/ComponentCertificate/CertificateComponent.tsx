import styles from './CertificateStyles.module.scss'
import { TbCertificate } from 'react-icons/tb'
import { StatusBarComponent } from '@/components/ComponentStatusBar/StatusBarComponent'
import { CiLocationArrow1 } from 'react-icons/ci'
import Image from 'next/image';

interface ICertificateComponentProps {
    id: number;
    type: string;
    name: string;
    instituition: {
        name: string;
        logo: string;
    };
    completedLevel: number;
    coverColor: string;
    logo?: string;
}

export default function CertificateComponent(props: ICertificateComponentProps) {
    return <>
        <aside className={styles.container}>
            <main className={styles.container__details} style={{ background: props.coverColor }}>
                <h3 className={styles.container__details__typecourse}>{props.type}</h3>
                <div className={styles.container__details__course}>
                    {props.logo && <>
                        <Image src={props.logo} alt="" className={styles.container__details__course__logo} />
                    </>}
                    <h2 className={styles.container__details__course__name}>{props.name}</h2>
                </div>
            </main>
            <footer className={styles.container__status}>
                <aside className={styles.container__status__institution}>
                    <Image src={props.instituition.logo} alt={props.instituition.name} />
                </aside>
                <div className={styles.statuscontainer}>
                    <div className={styles.statuscontainer__content}>
                        <StatusBarComponent level={props.completedLevel} />
                        <div className={styles.certificatestatus}>
                            <h6 className={styles.certificatestatus__text}>
                                {props.completedLevel === 100 ? "Certificado disponível" : "Em andamento"}
                            </h6>
                        </div>
                    </div>
                    <span className={styles.statuscontainer__certificate} style={{ display: props.completedLevel < 100 ? "none" : "block" }}>
                        <TbCertificate size={25} stroke="#7ee195" />
                    </span>
                </div>
                <section className={styles.container__status__hover}>
                    <h2 className={styles.container__status__hover__text}>
                        {props.completedLevel === 100 ? "Acessar certificado" : "Detalhar curso"}
                    </h2>
                    <span className={styles.container__status__hover__icon}>
                        <CiLocationArrow1 size={25} fill="#fff" />
                    </span>
                </section>
            </footer>
        </aside>
    </>
}