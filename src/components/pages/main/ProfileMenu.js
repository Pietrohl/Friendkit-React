import React, { useState } from 'react';
import { Clock } from 'react-feather';
import { Link } from 'react-router-dom';
function ProfileMenu() {
    return (
        <>
            <div className="profile-menu is-hidden-mobile">
                <div className="menu-start">
                    {
                        window.location.pathname
                            && window.location.pathname === '/profile-main'
                            ? <>
                                <Link to='/profile-main' className="button has-min-width is-active">Timeline</Link>
                                <Link to='/about' className="button has-min-width">About</Link>
                            </>
                            : window.location.pathname === '/about'
                                ? <>
                                    <Link to='/profile-main' className="button has-min-width">Timeline</Link>
                                    <Link to='/about' className="button has-min-width is-active">About</Link>
                                </>
                                : <>
                                    <Link to='/profile-main' className="button has-min-width">Timeline</Link>
                                    <Link to='/about' className="button has-min-width">About</Link>
                                </>
                    }

                </div>
                <div className="menu-end">
                    <a id="profile-friends-link" href="profile-friends.html" className="button has-min-width">Friends</a>
                    <a href="profile-photos.html" className="button has-min-width">Photos</a>
                </div>
            </div>
            <div className="profile-subheader">
                <div className="subheader-start is-hidden-mobile">
                    <span>3.4K</span>
                    <span>Friends</span>
                </div>
                <div className="subheader-middle">
                    <h2>Jenna Davis</h2>
                    <span>Media Influencer</span>
                </div>
                <div className="subheader-end is-hidden-mobile">
                    <a className="button has-icon is-bold" href="/#">
                        <Clock />
                        <span>History</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProfileMenu;
