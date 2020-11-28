import React from 'react';
import JobItems from './jobs/JobItems';

function JobsContent({ viewContent }) {
    return (
        <div id="job-content" className={`content-section ${viewContent}`}>
            {/* <!-- Timeline section --> */}
            <div id="jobs-glider" className="slider-timeline about-glider">
                <JobItems />
            </div>
            <div id="slider-dots-jobs-glider" className="dots"></div>
        </div >
    );
}

export default JobsContent;
