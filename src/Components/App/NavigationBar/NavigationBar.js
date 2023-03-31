import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useMediaQuery from '../useMediaQuery';
import styles from './styles.module.css';
import icons from './icons';

function NavigationBar() {
    const navigate = useNavigate();
    const mobile = useMediaQuery('(max-width: 600px)');
    const [currentNavLink, setCurrentNavLink] = useState('HOME');
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const handleNavLink = (e) => {
        setCurrentNavLink(e.target.id);
    }

    const handleMobileMenu = () => {
        setDisplayMobileMenu(!displayMobileMenu);
    }

    const handleEnter = (e) => {
        const navLink = e.target;
        if(navLink.classList.contains(styles.navBar_link_active))
            return;
        else
            navLink.style[mobile ? 'borderRight'  : 'borderBottom'] = '3px solid rgba(255, 255, 255, 0.5)';
    }

    const handleLeave = (e) => {
        const navLink = e.target;
        navLink.style[mobile ? 'borderRight'  : 'borderBottom'] = '';
    }

//this will 'slide in' the mobile menu when the user clicks on the hamburger icon
    useEffect(() => {
        const menu = document.querySelector('.' + styles.navBar_menu);

        if(displayMobileMenu)
            menu.style.right = '0px';
        else 
            menu.style.right = '';

    }, [displayMobileMenu])

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
            if(linkID == currentNavLink)
                link.classList.add(styles.navBar_link_active);
        })
    }, [currentNavLink])

    useEffect(() => {
        setDisplayMobileMenu(false);
    }, [currentNavLink])

//navigating to the page that the user requested
    useEffect(() => {
        if(currentNavLink == 'HOME')
            navigate('/');
        else if(currentNavLink == 'DESTINATION')
            navigate('/destination');
        else if(currentNavLink == 'CREW')
            navigate('/crew');
        
    }, [currentNavLink])


    return(
        <header className={styles.navBar}>
            <img src={icons['logo']} className={styles.navBar_logo} alt='logo'/>
            {mobile ? <img className={styles.navBar_hamburgerIcon} src={icons['hamburgerIcon']} onClick={handleMobileMenu}/> : <></>}
            <nav className={styles.navBar_menu}>
                    {mobile ? <img className={styles.navBar_closeIcon} src={icons['closeIcon']} onClick={handleMobileMenu}/> : <></>}
                    <hr className={styles.navBar_line}/>
                    <a className={styles.navBar_link} onClick={handleNavLink} id='HOME' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                        <span className={styles.navBar_link_title}>
                            00
                        </span> 
                        &nbsp;
                        HOME
                    </a>
                    <a className={styles.navBar_link} onClick={handleNavLink} id='DESTINATION' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                        <span className={styles.navBar_link_title}>
                            01
                        </span> 
                        &nbsp;
                        DESTINATION
                    </a>
                    <a className={styles.navBar_link} onClick={handleNavLink} id='CREW' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                        <span className={styles.navBar_link_title}>
                            02
                        </span> 
                        &nbsp;
                        CREW
                    </a>
                    <a className={styles.navBar_link} onClick={handleNavLink} id='TECHNOLOGY' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                        <span className={styles.navBar_link_title}>
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
