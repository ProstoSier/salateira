import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import instagram from './img/instagram.svg';
import facebook from './img/facebook.svg';

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerCopyright}>
                    <Link className={styles.footerRulesLink} to={'/'}>Rules</Link> Salateira © 2023
                </div>
                <div className={styles.footerAdvertisement}>
                    Powered by  <Link className={styles.footerAdvertisementLink} to={'/'}><span className={styles.boldText}>Dots</span> platform</Link> 
                </div>
                <div className={styles.footerActions}>
                    <Link className={styles.footerIconBtn} to={'/'}><img className={styles.footerIcon} src={instagram} alt='instagram'/></Link>
                    <Link className={styles.footerIconBtn} to={'/'}><img className={styles.footerIcon} src={facebook} alt='facebook'/></Link>
                </div>
            </div>
        </div>
    )
}