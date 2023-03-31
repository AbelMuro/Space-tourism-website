import React, {useEffect, useState} from 'react';
import useMediaQuery from '../useMediaQuery';
import styles from './styles.module.css';
import planetData from './PlanetData';
import images from './images';


/* i need to import useMediaQuery and change the background image for tablet and mobile*/
function Destination() {
    const mobile = useMediaQuery('(max-width: 600px)');
    const tablet = useMediaQuery('(max-width: 768px)');
    const [destination, setDestination] = useState('MOON');
    const [description, setDescription] = useState(planetData[`MOON desc`]);
    const [distance, setDistance] = useState(planetData[`MOON distance`]);
    const [travelTime, setTravelTime] = useState(planetData[`MOON travel time`]);


    const handleDestination = (e) => {
        const currentDest = e.target.id;
        setDestination(currentDest);
        setDescription(planetData[`${currentDest} desc`]);
        setDistance(planetData[`${currentDest} distance`]);
        setTravelTime(planetData[`${currentDest} travel time`]);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        if(mobile)
            body.style.backgroundImage = `url(${images['backgroundImageMobile']})`;
        else if(tablet)
            body.style.backgroundImage = `url(${images['backgroundImageTablet']})`;
        else
            body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
    }, [tablet, mobile])

    useEffect(() => {
        const allButtons = document.querySelectorAll('.' + styles.content_button);
        allButtons.forEach((button) => {
            button.classList.remove(styles.content_button_active);
        })
    }, [destination]);

    useEffect(() => {
        const allButtons = document.querySelectorAll('.' + styles.content_button);
        allButtons.forEach((button) => {
            const buttonID = button.id;
            if(buttonID == destination) 
                button.classList.add(styles.content_button_active);
        })
    }, [destination])

    return(
        <main className={styles.container}>
            <h5 className={styles.container_title}>
                <span className={styles.container_title_number}>
                    01
                </span>
                PICK YOUR DESTINATION
            </h5>
            <section className={styles.content}>
                <img className={styles.content_planet} src={images[destination]}/>
                <div className={styles.content_planetInfo}>
                    <nav className={styles.content_buttons}>
                        <button className={styles.content_button} onClick={handleDestination} id='MOON'>
                            MOON
                        </button>
                        <button className={styles.content_button} onClick={handleDestination} id='MARS'>
                            MARS
                        </button>
                        <button className={styles.content_button} onClick={handleDestination} id='EUROPA'>
                            EUROPA
                        </button>
                        <button className={styles.content_button} onClick={handleDestination} id='TITAN'>
                            TITAN
                        </button>
                    </nav>
                    <h2 className={styles.content_title}>
                        {destination}
                    </h2>
                    <p className={styles.content_desc}>
                        {description}
                    </p>
                    <hr className={styles.content_line}/>
                    <div className={styles.content_planetMisc}>
                        <div className={styles.content_planetDistance}>
                            <h6 className={styles.content_planetDistance_title}>
                                AVG. DISTANCE
                            </h6>
                            <p className={styles.content_planetDistance_desc}>
                                {distance}
                            </p>                            
                        </div>
                        <div className={styles.content_planetTravelTime}>
                            <h6 className={styles.content_planetTravelTime_title}>
                                EST. TRAVEL TIME
                            </h6>
                            <p className={styles.content_planetTravelTime_desc}>
                                {travelTime}
                            </p>                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Destination;