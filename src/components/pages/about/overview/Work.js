import React from 'react';
import { ArrowRight } from 'react-feather';

function Work() {
    return (
        <>
            {/* <!-- Work block --> */}
            <div className="flex-block">
                <img src="https://via.placeholder.com/400x400" data-demo-src="../../../../assets/img/icons/logos/slicer.svg" alt="" data-page-popover="4" />
                <div className="flex-block-meta">
                    <span>Works at <a href="/#">Slicer</a></span>
                    <a className="action-link" href="/#">Edit your professional info</a>
                </div>
                <div className="go-button">
                    <ArrowRight />
                </div>
            </div>
        </>
    );
}

export default Work;
