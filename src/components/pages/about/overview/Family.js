import React from 'react';
import { ArrowRight } from 'react-feather';

function Family() {
    return (
        <>
            {/* <!-- Family block --> */}
            <div className="flex-block">
                <img src="https://via.placeholder.com/300x300" data-demo-src="../assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
                <div className="flex-block-meta">
                    <span>Married to <a href="/#">Dan Walker</a></span>
                    <a className="action-link" href="/#">Edit your situation</a>
                </div>
                <div className="go-button">
                    <ArrowRight />
                </div>
            </div>
        </>
    );
}

export default Family;
