import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function NavigationBar() {
    const [currentNavLink, setCurrentNavLink] = useState('HOME');

    const handleNavLink = (e) => {
        setCurrentNavLink(e.target.id);
    }

//removing all border lines from the nav links
    useEffect(() => {
        const allNavLinks = document.querySelectorAll('.' + styles.navBar_link);

        allNavLinks.forEach((link) => {
            link.classList.remove(styles.navBar_link_active);
        })
    }, [currentNavLink])

//adding a border line to the nav link that the user selected
    useEffect(() => {
        const allNavLinks = document.querySelectorAll('.' + styles.navBar_link);

        allNavLinks.forEach((link) => {
            const linkID = link.id;
            console.log(linkID);
            if(linkID == currentNavLink)
                link.classList.add(styles.navBar_link_active);
        })

    }, [currentNavLink])

    return(
        <header className={styles.navBar}>
            <img src={icons['logo']} className={styles.navBar_logo}/>
            
            <nav className={styles.navBar_linkContainer}>
                <hr className={styles.navBar_line}/>
                <a className={styles.navBar_link} onClick={handleNavLink} id='HOME'>
                    <span className={styles.navBar_link_title}>
                        00
                    </span> 
                    &nbsp;
                    HOME
                </a>
                <a className={styles.navBar_link}>
                    <span className={styles.navBar_link_title} onClick={handleNavLink} id='DESTINATION'>
                        01
                    </span> 
                    &nbsp;
                    DESTINATION
                </a>
                <a className={styles.navBar_link}>
                    <span className={styles.navBar_link_title} onClick={handleNavLink} id='CREW'>
                        02
                    </span> 
                    &nbsp;
                    CREW
                </a>
                <a className={styles.navBar_link}>
                    <span className={styles.navBar_link_title} onClick={handleNavLink} id='TECHNOLOGY'>
                        03
                    </span> 
                    &nbsp;
                    TECHNOLOGY
                </a>
            </nav>
        </header>
    )
}

export default NavigationBar;
