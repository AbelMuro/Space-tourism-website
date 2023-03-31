import React, {useEffect} from 'react';
import useMediaQuery from '../useMediaQuery';
import styles from './styles.module.css';
import images from './images';

function CrewPage() {
    const tablet = useMediaQuery('(max-width: 768px)');
    const mobile = useMediaQuery('(max-width: 600px)');


    useEffect(() => {
        const body = document.querySelector('body');

        if(mobile)
            body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
        else if(tablet)
            body.style.backgroundImage = `url(${images['backgroundImageTablet']})`;
        else
            body.style.backgroundImage = `url(${images['backgroundImageDesktop']})`;
    }, [tablet, mobile])

    return(
        <main>

        </main>
    )
}

export default CrewPage;