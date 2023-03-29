import React, {useEffect} from 'react';
import useMediaQuery from '../useMediaQuery';
import styles from './styles.module.css';
import images from './images'


/* i will need to load the background images for tablet and mobile in a useEFFECT*/
function HomePage() {
    const tablet = useMediaQuery('(max-width: 768px)');
    const mobile = useMediaQuery('(max-width: 600px)')

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundImage = `url(${images['earthBackground']})`;
    }, [])

    return(
        <main className={styles.home}>
            <section className={styles.home_messageContainer}>
                <h5 className={styles.home_messageContainer_titleOne}>
                    SO, YOU WANT TO TRAVEL TO
                </h5>
                <h1 className={styles.home_messageContainer_titleTwo}>
                    SPACE
                </h1>
                <p className={styles.home_messageContainer_desc}>
                    Let’s face it; if you want to go to space, you might 
                    as well genuinely go to outer space and not hover kind of on the edge of it. 
                    Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </section>
            <button className={styles.home_exploreButton}>
                EXPLORE
            </button>
        </main>
    )
}

export default HomePage;