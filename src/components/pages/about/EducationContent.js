import React from 'react';
import EducationItems from './education/EducationItems';


function EducationContent({ viewContent }) {

    return (
        <div id="education-content" className={`content-section ${viewContent}`}>
            <div id="education-glider" className="slider-timeline about-glider">
                <EducationItems />
            </div>
            <div id="slider-dots-education-glider" className="dots"></div>

        </div>
    );
}

export default EducationContent;
