import { Link } from 'react-router-dom';
import styles from './home.module.css';
import share from './img/share.svg';

export function Home() {
    return (
        <div className={styles.homeContent}>
            <header className={styles.homeHeader}>
                <div className={styles.homeIntro}>
                    <h1 className={styles.homeTitle}>Salateira</h1>
                    <div className={styles.homeIntroActions}>
                        <div className={styles.homeIntroBlockBtn}>
                            <Link className={styles.homeIntroActionsBtn} to={'/'}>Menu</Link>
                            <Link className={styles.homeIntroActionsBtn} to={'/'}>4.9</Link>
                            <Link className={styles.homeIntroActionsBtn} to={'/'}>from 40 $</Link>
                            <Link className={styles.homeIntroActionsBtn} to={'/'}>45 min.</Link>
                            <Link className={styles.homeIntroActionsBtn} to={'/'}>info</Link>
                        </div>
                        <Link className={styles.homeIntroActionsShare} to={'/'}><img className={styles.homeIntroActionsShareIcon} src={share} alt='share'/></Link>
                    </div>
                </div>
                <p className={styles.homeDeliveryTime}>
                    Час доставки складає від 40 хв до 1 год 30 хв, в залежності від адреси та завантаженості доріг🚗🏍🚲 Деякі замовлення відправляємо на таксі в час пік🚕 Пасти на доставку подаються холодними😋
                </p> 
            </header>
            <main className={styles.homeMain}>

            </main>
            <footer className={styles.homeFooter}>
            </footer>
        </div>
    )
}