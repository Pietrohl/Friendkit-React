import React from 'react';
import Education from './overview/Education';
import Work from './overview/Work';
import Location from './overview/Location';
import Family from './overview/Family';
import AboutMe from "./overview/AboutMe";

function OverviewContent({ viewContent }) {
    return (
        <div id="overview-content" className={`content-section ${viewContent}`}>
            <div className="columns">
                <div className="column">
                    <Work />
                    <Education />
                    <Location />
                    <Family />
                </div>
                <AboutMe />
            </div>
        </div>
    );
}

export default OverviewContent;
