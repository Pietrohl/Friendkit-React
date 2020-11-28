import React from 'react';
import { ArrowRight } from 'react-feather';
function Education() {
    return (
        <>
            {/* <!-- Education block --> */}
            <div className="flex-block">
                <img src="https://via.placeholder.com/400x400" data-demo-src="../../../../assets/img/icons/logos/brent.svg" alt="" data-page-popover="6" />
                <div className="flex-block-meta">
                    <span>Studied at <a href="/#">Brent University</a></span>
                    <a className="action-link" href="/#">Edit your education info</a>
                </div>
                <div className="go-button">
                    <ArrowRight />
                </div>
            </div>
        </>
    );
}

export default Education;
