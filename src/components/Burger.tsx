import { useState } from 'react';
import styles from './header.module.css';
import classNames from 'classnames';
import close from '../components/img/close.svg';

export function Burger() {

    const [ isOpened, setIsOpened ] = useState<boolean>(false);
    const [ isClosed, setIsClosed ] = useState<boolean>(true);
    return (
        <>
        <nav className={styles.menuBurger} role='navigation'> 
                <div className={classNames(styles.cover, {[styles.coverShow] : isOpened,})} onClick={() => setIsOpened(false)}>
                    
                </div>
                <div className={classNames(styles.menuBurgerBlock, {[styles.menuBurgerBlockShow] : isOpened,})}>
                    <button className={classNames(styles.btnClosed, {[styles.btnClosedShow] : isOpened,})} onClick={() => setIsOpened(false)}><img src={close} alt='close'/></button>  
                </div>
        </nav>
        <div className={classNames(styles.menuIcon, {[styles.menuIcon] : isOpened,})} onClick={() => setIsOpened(true)}>
        <span></span>
        </div>        
        </>
    );
}