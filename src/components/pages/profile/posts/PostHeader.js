import React, { useState, useEffect } from 'react';
import { Bookmark, MoreVertical, Flag, Bell } from "react-feather";

function PostHeader() {
    const [isActive, setIsActive] = useState('');
    const [toggled, setToggled] = useState(false);
    useEffect(() => {
        if (toggled) {
            setIsActive('is-active');
        } else {
            setIsActive('');
        }
    }, [toggled]);
    return (
        <>
            <div className="card-heading">
                <div className="user-block">
                    <div className="image">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" data-user-popover="0" alt="" />
                    </div>
                    <div className="user-info">
                        <a href="/#">Jenna Davis</a>
                        <span className="time">October 17 2018, 11:03am</span>
                    </div>
                </div>

                <div className={`dropdown is-spaced is-right is-neutral dropdown-trigger ${isActive}`} onClick={() => setToggled(!toggled)}>
                    <div>
                        <div className="button">
                            <MoreVertical />
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Bookmark />
                                    <div className="media-content">
                                        <h3>Bookmark</h3>
                                        <small>Add this post to your bookmarks.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Bell />
                                    <div className="media-content">
                                        <h3>Notify me</h3>
                                        <small>Send me the updates.</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Flag />
                                    <div className="media-content">
                                        <h3>Flag</h3>
                                        <small>In case of inappropriate content.</small>
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

export default PostHeader;
