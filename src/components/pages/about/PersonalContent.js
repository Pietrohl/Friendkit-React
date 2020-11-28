import React from 'react';
import Friends from "./personal/about-cards/Friends";
import Videos from "./personal/about-cards/Videos";
import Photos from "./personal/about-cards/Photos";
import Places from "./personal/about-cards/Places";

function PersonalContent({ viewContent }) {
    return (
        <>
            {/* <!-- Personal tab --> */}
            <div id="personal-content" className={`content-section ${viewContent}`}>
                <Friends />
                <Photos />
                <Videos />
                <Places />
            </div>
        </>
    );
}

export default PersonalContent;
