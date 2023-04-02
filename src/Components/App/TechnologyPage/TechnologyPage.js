import React, {useEffect, useState, useRef} from 'react';
import useMediaQuery from '../useMediaQuery';
import styles from './styles.module.css';
import images from './images';
import technologyData from './TechnologyData';

function TechnologyPage() {
    const [deviceName, setDeviceName] = useState('launch vehicle');
    const [desc, setDesc] = useState(technologyData['launch vehicle']);
    const allTimeouts = useRef([]);
    const mobile = useMediaQuery('(max-width: 600px)');
    const tablet = useMediaQuery('(max-width: 768px)');


    const handleEnter = () => {
        allTimeouts.current.forEach((timeout) => {
            clearTimeout(timeout);
        })
    }

    const handleClick = (e) => {
        const device = e.target.id;
        setDeviceName(device);
        setDesc(technologyData[device]);
    }

    //adding a setTimeout() to all buttons to trigger a carousel effect
    useEffect(() => {
        const allDots = document.querySelectorAll('.' + styles.content_info_button);

        allDots.forEach((dot, i) => {
            allTimeouts.current[i] = setTimeout(() => {
                dot.click();
            }, i * 3000)
        })

    }, [])

//this will change the background image for mobile, tablet and desktop
    useEffect(() => {
        const body = document.querySelector('body');

        if(mobile)
            body.style.backgroundImage = `url(${images['backgroundImageMobile']})`;
        else if(tablet)
            body.style.backgroundImage = `url(${images['backgroundImageTablet']})`;
        else 
            body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
        
    }, [mobile, tablet])


//this will change the image between landscape and portrait, 
//it will also change the image according to the numbered button that the user clicked on
    useEffect(() => {
        const deviceImage = document.querySelector('.' + styles.content_image);
        const device = deviceName.toLowerCase().replace(' ', '');
        deviceImage.src = tablet ?  images[`${device}Landscape`] : images[`${device}Portrait`]

    }, [deviceName, tablet])

//removing the white background color from the numbered buttons
    useEffect(() => {
        const allButtons = document.querySelectorAll('.' + styles.content_info_button);

        allButtons.forEach((button) => {
            button.style.backgroundColor = '';
            button.style.color = '';
        })

    }, [deviceName])

//adding a white background color to the numbered button that the user clicked on
    useEffect(() => {
        const allButtons = document.querySelectorAll('.' + styles.content_info_button);

        allButtons.forEach((button) => {
            const buttonID = button.id;
            if(buttonID == deviceName){
                button.style.backgroundColor = 'white';
                button.style.color = 'black'
            }  
        })
    }, [deviceName])


    return(
        <main className={styles.container}>
            <h5 className={styles.container_title}>
                <span className={styles.container_title_number}>
                    03
                </span>
                SPACE LAUNCH 101
            </h5>
            <section className={styles.content}>
                <div className={styles.content_info}>
                    <div className={styles.content_info_buttons}>
                        <button className={styles.content_info_button} onClick={handleClick} onMouseEnter={handleEnter} id='launch vehicle'>
                            1
                        </button>
                        <button className={styles.content_info_button} onClick={handleClick} onMouseEnter={handleEnter} id='spaceport'>
                            2
                        </button>
                        <button className={styles.content_info_button} onClick={handleClick} onMouseEnter={handleEnter} id='space capsule'>
                            3
                        </button>
                    </div>  
                    <div className={styles.content_info_text}>
                        <h6 className={styles.content_info_title_one}>
                            THE TERMINOLOGY...
                        </h6>
                        <h3 className={styles.content_info_title_two}>
                            {deviceName}
                        </h3>
                        <p className={styles.content_info_desc}>
                            {desc}
                        </p>
                    </div>  
                </div> 
                <img className={styles.content_image} alt={deviceName}/>
            </section>
        </main>
    )
}

export default TechnologyPage;