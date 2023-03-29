import React from 'react';
import styles from './styles.module.css';
import icons from './icons';

function NavigationBar() {
    return(
        <header className={styles.navBar}>
            <img src={icons['logo']} className={styles.navBar_logo}/>
            <hr className={styles.navBar_line}/>
            <nav className={styles.navBar_linkContainer}>
                
            </nav>
        </header>
    )
}

export default NavigationBar;
