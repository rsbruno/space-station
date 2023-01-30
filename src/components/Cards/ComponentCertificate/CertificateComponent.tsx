import styles from './CertificateStyles.module.scss'
import { TbCertificate } from 'react-icons/tb'
import { StatusBarComponent } from '@/components/ComponentStatusBar/StatusBarComponent'

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
                        <img src={props.logo} alt="" className={styles.container__details__course__logo} />
                    </>}
                    <h2 className={styles.container__details__course__name}>{props.name}</h2>
                </div>
            </main>

            <footer className={styles.container__status}>
                <aside className={styles.container__status__institution}>
                    <img src={props.instituition.logo} alt={props.instituition.name} />
                </aside>
                <div className={styles.statuscontainer}>
                    <StatusBarComponent level={props.completedLevel} />
                    <div className={styles.certificatestatus}>
                        <TbCertificate size={25} color="#fff" />
                        <h6 className={styles.certificatestatus__text}>
                            {props.completedLevel === 100 ? "Acessar certificado" : "Em andamento"}
                        </h6>
                    </div>
                </div>
            </footer>
        </aside>
    </>
}