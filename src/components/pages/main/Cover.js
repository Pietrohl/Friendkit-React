import React from 'react';
import {
    MoreVertical,
    Activity,
    AlignRight,
    Heart,
    Image
} from 'react-feather';
import Avatar from '../main/Avatar';

function Cover() {
    return (
        <>
            <div className="cover-bg">
                <img className="cover-image" src="https://via.placeholder.com/1600x460" data-demo-src="../assets/img/demo/bg/4.png" alt="" />
                <Avatar />
                <div className="cover-overlay"></div>
                <div className="cover-edit modal-trigger" data-modal="change-cover-modal">
                    <i className="mdi mdi-camera"></i>
                    <span>Edit cover image</span>
                </div>
                {/* <!--/html/partials/pages/profile/timeline/dropdowns/timeline-mobile-dropdown.html--> */}
                <div className="dropdown is-spaced is-right is-accent dropdown-trigger timeline-mobile-dropdown is-hidden-desktop">
                    <div>
                        <div className="button">
                            <MoreVertical />
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="/profile-main.html" className="dropdown-item">
                                <div className="media">
                                    <Activity />
                                    <div className="media-content">
                                        <h3>Timeline</h3>
                                        <small>Open Timeline.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/profile-about.html" className="dropdown-item">
                                <div className="media">
                                    <AlignRight />
                                    <div className="media-content">
                                        <h3>About</h3>
                                        <small>See about info.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/profile-friends.html" className="dropdown-item">
                                <div className="media">
                                    <Heart />
                                    <div className="media-content">
                                        <h3>Friends</h3>
                                        <small>See friends.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/profile-photos.html" className="dropdown-item">
                                <div className="media">
                                    <Image />
                                    <div className="media-content">
                                        <h3>Photos</h3>
                                        <small>See all photos.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cover;
