import React, {useEffect} from 'react';
import styles from './styles.module.css';
import images from './images'

function HomePage() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundImage = `url(${images['earthBackground']})`;
    }, [])

    return(
        <main className={styles.home}>

        </main>
    )
}

export default HomePage;