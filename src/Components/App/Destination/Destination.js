import React, {useEffect} from 'react';
import styles from './styles.module.css';
import images from './images';

function Destination() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
    }, [])

    return(
        <main className={styles.container}>
            <h5 className={styles.container_title}>
                <span className={styles.container_title_number}>
                    01
                </span>
                PICK YOUR DESTINATION
            </h5>
            <section className={styles.content}>
                <img className={styles.content_planet} src={images['moon']}/>
                <div className={styles.content_planetInfo}>
                    <nav className={styles.content_buttons}>
                        <button className={styles.content_button}>
                            MOON
                        </button>
                        <button className={styles.content_button}>
                            MARS
                        </button>
                        <button className={styles.content_button}>
                            EUROPA
                        </button>
                        <button className={styles.content_button}>
                            TITAN
                        </button>
                    </nav>
                    <h2 className={styles.content_title}>
                        MOON
                    </h2>
                    <p className={styles.content_desc}>
                        See our planet as you’ve never seen it before. 
                        A perfect relaxing trip away to help regain perspective 
                        and come back refreshed. While you’re there, take in some 
                        history by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <hr className={styles.content_line}/>
                    <div className={styles.content_planetMisc}>
                        <div className={styles.content_planetDistance}>
                            <h6 className={styles.content_planetDistance_title}>
                                AVG. DISTANCE
                            </h6>
                            <p className={styles.content_planetDistance_desc}>
                                384,400 km
                            </p>                            
                        </div>
                        <div className={styles.content_planetTravelTime}>
                            <h6 className={styles.content_planetTravelTime_title}>
                                Est. travel time
                            </h6>
                            <p className={styles.content_planetTravelTime_desc}>
                                3 days
                            </p>                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Destination;