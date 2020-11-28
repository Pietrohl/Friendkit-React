import React from 'react';
import {
    Lock,
    User,
    Users,
    MoreVertical,
    Globe,
} from 'react-feather';
function PopUpHeader() {
    return (
        <div>
            <div className="header">
                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                <div className="user-meta">
                    <span>Dan Walker</span>
                    <span><small>2 hours ago</small></span>
                </div>
                <button type="button" className="button">Follow</button>
                <div className="dropdown is-spaced is-right dropdown-trigger">
                    <div>
                        <div className="button">
                            <MoreVertical />
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item is-title has-text-left">
                                Who can see this ?
                            </div>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <Globe />
                                    <div className="media-content">
                                        <h3>Public</h3>
                                        <small>Anyone can see this publication.</small>
                                    </div>
                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="media">
                                    <Users />
                                    <div className="media-content">
                                        <h3>Friends</h3>
                                        <small>only friends can see this publication.</small>
                                    </div>
                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="media">
                                    <User />
                                    <div className="media-content">
                                        <h3>Specific friends</h3>
                                        <small>Don't show it to some friends.</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a className="dropdown-item">
                                <div className="media">
                                    <Lock />
                                    <div className="media-content">
                                        <h3>Only me</h3>
                                        <small>Only me can see this publication.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUpHeader;
