import React, { useLayoutEffect } from 'react';
import bulmaSVG from '../../../assets/img/icons/logos/bulma.svg'
import gulpSVG from '../../../assets/img/icons/logos/gulp.svg'
import sassSVG from '../../../assets/img/icons/logos/html5.svg'
import html5SVG from '../../../assets/img/icons/logos/html5.svg'
import friendkitFeed from '../../../assets/img/screens/friendkit-feed.png'
import sr from '../../../Hooks/ScrollReveal';

export const LandingStart = () => {

    const madeBlocks = [
        {
            id: 'made-with-bulma',
            src: bulmaSVG,
            title: 'Bulma 0.9.0'
        }, {
            id: 'made-with-gulp',
            src: gulpSVG,
            title: 'Gulp'
        },
        {
            id: 'made-with-bulma',
            src: sassSVG,
            title: 'Sass'
        },
        {
            id: 'made-with-Html5',
            src: html5SVG,
            title: 'Html5'
        }]

useLayoutEffect(()=> {

    const revealLoad = () => {
        sr.reveal('.is-box-reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 600,
            delay: 100,
            rotate: { x: 0, y: 0, z: 0 },
            opacity: 0,
            scale: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            container: window.document.documentElement,
            mobile: true,
            reset: true,
            useDelay: 'always',
            viewFactor: 0.2,

        }, 100);
    }
    window.addEventListener('load', revealLoad);
    return () => window.removeEventListener('load', revealLoad);
},[])



    return (

        <div id="landing-start" className="section landing-wrapper">
            <div className="container">
                <div className="made-with">

                    {madeBlocks.map(block =>
                        (
                            <div id={block.id} className="made-block">
                                <div className="block-icon is-box-reveal">
                                    <img src={block.src} alt="" />
                                </div>
                                <div className="block-title">
                                    <h3>{block.title}</h3>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <div className="screen-wrapper">
                    <img src={friendkitFeed} alt="" />
                </div>
            </div>
        </div>
    )
};
