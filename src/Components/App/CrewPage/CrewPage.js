import React, {useEffect, useState, useRef} from 'react';
import useMediaQuery from '../useMediaQuery';
import styles from './styles.module.css';
import images from './images';
import crewData from './CrewData';

function CrewPage() {
    const tablet = useMediaQuery('(max-width: 768px)');
    const mobile = useMediaQuery('(max-width: 600px)');
    const [crewMemberTitle, setCrewMemberTitle] = useState(crewData['douglas hurley title']);
    const [crewMemberName, setCrewMemberName] = useState('douglas hurley');
    const [crewMemberDesc, setCrewMemberDesc] = useState(crewData['douglas hurley desc']);
    const allTimeouts = useRef([]);


    const handleEnter = () => {
        allTimeouts.current.forEach((timeout) => {
            clearTimeout(timeout);
        })
    }

    const handleDotClick = (e) => {
        const crewMember = e.target.id;
        setCrewMemberName(crewMember);        
        setCrewMemberTitle(crewData[`${crewMember} title`]);
        setCrewMemberDesc(crewData[`${crewMember} desc`]);
    }


    useEffect(() => {
        const allDots = document.querySelectorAll('.' + styles.content_crewInfo_navDot);

        allDots.forEach((dot, i) => {
            allTimeouts.current[i] = setTimeout(() => {
                dot.click();
            }, i * 3000)
        })

    }, [])


    useEffect(() => {
        const body = document.querySelector('body');

        if(mobile)
            body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
        else if(tablet)
            body.style.backgroundImage = `url(${images['backgroundImageTablet']})`;
        else
            body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
    }, [tablet, mobile])

//removing the white background color from all dots
    useEffect(() => {
        const navDots = document.querySelectorAll('.' + styles.content_crewInfo_navDot);

        navDots.forEach((dot) => {
            dot.style.backgroundColor = '';
        })
    }, [crewMemberName])

//adding a white background color to the dot that the user clicked on
    useEffect(() => {
        const navDots = document.querySelectorAll('.' + styles.content_crewInfo_navDot);

        navDots.forEach((dot) => {
            const dotID = dot.id;
            if(dotID == crewMemberName)
                dot.style.backgroundColor = 'white';
        })
    }, [crewMemberName]);


    return(
        <main className={styles.container}>
            <section className={styles.content}>

                <h5 className={styles.container_title}>
                    <span className={styles.container_title_number}>
                        02
                    </span>
                    MEET YOUR CREW
                </h5>
                {mobile ? 
                <div className={styles.imageContainer}>
                    <img className={styles.content_crewImage} src={images[`${crewMemberName.replace(' ', '')}`]} alt={crewMemberName}/> 
                </div>
                
                : <></>}
                <div className={styles.content_crewInfo}>
                    <h4 className={styles.content_crewInfo_title_one}>
                        {crewMemberTitle}
                    </h4>
                    <h3 className={styles.content_crewInfo_title_two}>
                        {crewMemberName}
                    </h3>
                    <p className={styles.content_crewInfo_desc}>
                        {crewMemberDesc}
                    </p>    
                    <nav className={styles.content_crewInfo_nav}>
                        <div className={styles.content_crewInfo_navDot} onClick={handleDotClick} onMouseEnter={handleEnter} id='douglas hurley'></div>
                        <div className={styles.content_crewInfo_navDot} onClick={handleDotClick} onMouseEnter={handleEnter} id='mark shuttleworth'></div>
                        <div className={styles.content_crewInfo_navDot} onClick={handleDotClick} onMouseEnter={handleEnter} id='victor glover'></div>
                        <div className={styles.content_crewInfo_navDot} onClick={handleDotClick} onMouseEnter={handleEnter} id='anousheh ansari'></div>
                    </nav>                
                </div>
            </section>                
            {mobile ? <></> : 
            <img className={styles.content_crewImage} src={images[`${crewMemberName.replace(' ', '')}`]} alt={crewMemberName}/>}
        </main>
    )
}

export default CrewPage;