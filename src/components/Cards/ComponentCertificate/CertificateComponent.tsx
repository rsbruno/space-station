import styles from './CertificateStyles.module.scss'
import { TbCertificate } from 'react-icons/tb'
import { StatusBarComponent } from '@/components/ComponentStatusBar/StatusBarComponent'
import { CiLocationArrow1 } from 'react-icons/ci'
import Image from 'next/image';


export default function CertificateComponent(props: ICertificate) {
    return <>
        <aside className={styles.container}>
            <main className={styles.container__details} style={{ background: props.covercolor.hex }}>
                <h3 className={styles.container__details__typecourse}>{`${props.classification.name} > ${props.stackStudied.name}`}</h3>
                <div className={styles.container__details__course}>
                    {props.logo && <>
                        <Image
                            alt={`imagem da stack ${props.stackStudied.name} aplicada no curso`}
                            className={styles.container__details__course__logo}
                            src={props.logo}
                            height={40}
                            width={40}
                        />
                    </>}
                    <h2 className={styles.container__details__course__name}>{props.name}</h2>
                </div>
            </main>
            <footer className={styles.container__status}>
                <aside className={styles.container__status__institution}>
                    <Image
                        alt={`logo da ${props.instituition.name}`}
                        src={props.instituition.logo}
                        height={30}
                        width={30}
                    />
                </aside>
                <div className={styles.statuscontainer}>
                    <div className={styles.statuscontainer__content}>
                        <StatusBarComponent level={props.stateLevel} />
                        <div className={styles.certificatestatus}>
                            <h6 className={styles.certificatestatus__text}>
                                {props.stateLevel === 100 ? "Certificado disponível" : "Em andamento"}
                            </h6>
                        </div>
                    </div>
                    <span className={styles.statuscontainer__certificate} style={{ display: props.stateLevel < 100 ? "none" : "block" }}>
                        <TbCertificate size={25} stroke="#7ee195" />
                    </span>
                </div>
                <section className={styles.container__status__hover}>
                    <h2 className={styles.container__status__hover__text}>
                        {props.stateLevel === 100 ? "Acessar certificado" : "Detalhar curso"}
                    </h2>
                    <span className={styles.container__status__hover__icon}>
                        <CiLocationArrow1 size={25} fill="#fff" />
                    </span>
                </section>
            </footer>
        </aside>
    </>
}