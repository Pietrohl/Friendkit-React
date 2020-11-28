import React from 'react';
import { ArrowRight } from 'react-feather';

function Location() {
    return (
        <>
            {/* <!-- Location block --> */}
            <div className="flex-block">
                <img src="https://via.placeholder.com/400x400" data-demo-src="../assets/img/icons/logos/la.svg" alt="" data-page-popover="8" />
                <div className="flex-block-meta">
                    <span>Lives in <a href="/#">Los Angeles, CA</a></span>
                    <a className="action-link" href="/#">Edit your location</a>
                </div>
                <div className="go-button">
                    <ArrowRight />
                </div>
            </div>
        </>
    );
}

export default Location;
