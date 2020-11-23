import React from 'react';
import bulmaSVG from '../../../assets/img/icons/logos/bulma.svg'
import gulpSVG from '../../../assets/img/icons/logos/gulp.svg'
import sassSVG from '../../../assets/img/icons/logos/html5.svg'
import html5SVG from '../../../assets/img/icons/logos/html5.svg'
import friendkitFeed from '../../../assets/img/screens/friendkit-feed.png'


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
