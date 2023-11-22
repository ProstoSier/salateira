import styles from "../pages/home.module.css";
import { Link } from "react-router-dom";
import share from './img/share.svg';

export function PageHeader() {
    return (
        <div className={styles.homeHeader}>
                <div className={styles.homeIntro}>
                        <h1 className={styles.homeTitle}>Salateira</h1>
                        <div className={styles.homeIntroActions}>
                            <div className={styles.homeIntroBlockBtn}>
                                <Link className={styles.homeIntroActionsBtn} to={'/menu'}>Menu</Link>
                                <Link className={styles.homeIntroActionsBtn} to={'/'}>4.9</Link>
                                <Link className={styles.homeIntroActionsBtn} to={'/'}>from 40 $</Link>
                                <Link className={styles.homeIntroActionsBtn} to={'/'}>45 min.</Link>
                                <Link className={styles.homeIntroActionsBtn} to={'/'}>info</Link>
                            </div>
                            <Link className={styles.homeIntroActionsShare} to={'/'}><img className={styles.homeIntroActionsShareIcon} src={share} alt='share'/></Link>
                        </div>
                    </div>
                    <p className={styles.homeDeliveryTime}>
                        The delivery time is from 40 minutes to 1 hour 30 minutes, depending on the address and traffic congestion 🚗🏍🚲 Some orders are sent by taxi during rush hour 🚕 Pasta is served cold for delivery😋
                    </p> 
            </div>
    )          
}