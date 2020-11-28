import React from 'react';

function ChatTopNavigation() {
    return (
        <>
            <div className="chat-nav">
                <div className="nav-start">
                    <div className="recipient-block">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                        </div>
                        <div className="username">
                            <span>Dan Walker</span>
                            <span><i data-feather="star"></i> <span>| Online</span></span>
                        </div>
                    </div>
                </div>
                <div className="nav-end">

                    {/* <!-- Settings icon dropdown --> */}
                    <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                        <div>
                            <a className="chat-nav-item is-icon">
                                <i data-feather="settings"></i>
                            </a>
                        </div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="message-square"></i>
                                        <div className="media-content">
                                            <h3>Details</h3>
                                            <small>View this conversation's details.</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="settings"></i>
                                        <div className="media-content">
                                            <h3>Preferences</h3>
                                            <small>Define your preferences.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="bell"></i>
                                        <div className="media-content">
                                            <h3>Notifications</h3>
                                            <small>Set notifications settings.</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="bell-off"></i>
                                        <div className="media-content">
                                            <h3>Silence</h3>
                                            <small>Disable notifications.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="box"></i>
                                        <div className="media-content">
                                            <h3>Archive</h3>
                                            <small>Archive this conversation.</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="trash-2"></i>
                                        <div className="media-content">
                                            <h3>Delete</h3>
                                            <small>Delete this conversation.</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="chat-search">
                        <div className="control has-icon">
                            <input type="text" className="input" placeholder="Search messages" />
                            <div className="form-icon">
                                <i data-feather="search"></i>
                            </div>
                        </div>
                    </div>
                    <a className="chat-nav-item is-icon is-hidden-mobile">
                        <i data-feather="at-sign"></i>
                    </a>
                    <a className="chat-nav-item is-icon is-hidden-mobile">
                        <i data-feather="star"></i>
                    </a>

                    {/* <!-- More dropdown --> */}
                    <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                        <div>
                            <a className="chat-nav-item is-icon no-margin">
                                <i data-feather="more-vertical"></i>
                            </a>
                        </div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="file-text"></i>
                                        <div className="media-content">
                                            <h3>Files</h3>
                                            <small>View all your files.</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="users"></i>
                                        <div className="media-content">
                                            <h3>Users</h3>
                                            <small>View all users you're talking to.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="gift"></i>
                                        <div className="media-content">
                                            <h3>Daily bonus</h3>
                                            <small>Get your daily bonus.</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="download-cloud"></i>
                                        <div className="media-content">
                                            <h3>Downloads</h3>
                                            <small>See all your downloads.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="life-buoy"></i>
                                        <div className="media-content">
                                            <h3>Support</h3>
                                            <small>Reach our support team.</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a className="chat-nav-item is-icon close-chat">
                        <i data-feather="x"></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default ChatTopNavigation;
