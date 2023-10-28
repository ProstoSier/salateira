import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import { Burger } from './Burger';

export function Header() {
    return (
        <header className={styles.header}>
            <Burger /> 
            <NavLink to={'/'} className={styles.headerLogo}>
                Salateira
            </NavLink>
            <div className={styles.headerCity}>
                Kyiv
            </div>
            <div className={styles.headerActions}>
                <NavLink to={'/'} className={styles.headerActionsLink}>
                    INFO@SALATEIRA.UA
                </NavLink>
                <NavLink to={'/'} className={styles.headerActionsLink}>
                    Support chat
                </NavLink>
            </div>
        </header>
    )
}