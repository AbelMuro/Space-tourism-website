import React, {useEffect, useState} from 'react';
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

    const handleClick = (e) => {
        const crewMember = e.target.id;
        setCrewMemberTitle(crewData[`${crewMember} title`]);
        setCrewMemberName(crewMember);
        setCrewMemberDesc(crewData[`${crewMember} desc`]);
    }

    useEffect(() => {
        const body = document.querySelector('body');

        if(mobile)
            body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
        else if(tablet)
            body.style.backgroundImage = `url(${images['backgroundImageTablet']})`;
        else
            body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
    }, [tablet, mobile])

    useEffect(() => {
        const navDots = document.querySelectorAll('.' + styles.content_crewInfo_navDot);

        navDots.forEach((dot) => {
            dot.style.backgroundColor = '';
        })
    })


    useEffect(() => {
        const navDots = document.querySelectorAll('.' + styles.content_crewInfo_navDot);

        navDots.forEach((dot) => {
            const dotID = dot.id;
            if(dotID == crewMemberName)
                dot.style.backgroundColor = 'white';
        }, [])
    }, [crewMemberName]);

    useEffect(() => {
        const navDots = document.querySelectorAll('.' + styles.content_crewInfo_navDot);

        setInterval(() => {

        }, 2000)
    }, [])



    return(
        <main className={styles.container}>

            <section className={styles.content}>

                <h5 className={styles.container_title}>
                    <span className={styles.container_title_number}>
                        02
                    </span>
                    MEET YOUR CREW
                </h5>

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
                        <div className={styles.content_crewInfo_navDot} onClick={handleClick} id='douglas hurley'></div>
                        <div className={styles.content_crewInfo_navDot} onClick={handleClick} id='mark shuttleworth'></div>
                        <div className={styles.content_crewInfo_navDot} onClick={handleClick} id='victor glover'></div>
                        <div className={styles.content_crewInfo_navDot} onClick={handleClick} id='anousheh ansari'></div>
                    </nav>                
                </div>
            </section>                
            <img className={styles.content_crewImage} src={images[`${crewMemberName.replace(' ', '')}`]} alt={crewMemberName}/>
        </main>
    )
}

export default CrewPage;