import React, { useState, useEffect } from 'react';
import {
    MoreVertical,
    Edit3,
    Plus,
    Settings,
    Heart
} from 'react-feather';
function Videos() {
    const [isActive1, setIsActive1] = useState('');
    const [isActive2, setIsActive2] = useState('');
    const [isActive3, setIsActive3] = useState('');
    const [isActive4, setIsActive4] = useState('');
    const [isActive5, setIsActive5] = useState('');
    const [isActive6, setIsActive6] = useState('');
    const [dropdownIsActive, setDropdownIsActive] = useState('');

    const [toggled1, setToggled1] = useState(false);
    const [toggled2, setToggled2] = useState(false);
    const [toggled3, setToggled3] = useState(false);
    const [toggled4, setToggled4] = useState(false);
    const [toggled5, setToggled5] = useState(false);
    const [toggled6, setToggled6] = useState(false);
    const [dropdownToggled, setDropdownToggled] = useState(false);
    useEffect(() => {

        if (toggled1) { setIsActive1('is-active'); } else { setIsActive1(''); }
        if (toggled2) { setIsActive2('is-active'); } else { setIsActive2(''); }
        if (toggled3) { setIsActive3('is-active'); } else { setIsActive3(''); }
        if (toggled4) { setIsActive4('is-active'); } else { setIsActive4(''); }
        if (toggled5) { setIsActive5('is-active'); } else { setIsActive5(''); }
        if (toggled6) { setIsActive6('is-active'); } else { setIsActive6(''); }
        if (dropdownToggled) {
            setDropdownIsActive('is-active');
        } else {
            setDropdownIsActive('');
        }


    }, [toggled1, toggled2, toggled3, toggled4, toggled5, toggled6, dropdownToggled]);
    return (
        <>
            {/* <!-- Videos about card --> */}
            <div className="about-card">
                {/* <!-- Header --> */}
                <div className="header">
                    <div className="icon-title">
                        <i className="mdi mdi-video"></i>
                        <h3>Videos</h3>
                    </div>
                    <div className="actions">
                        <div className="button-wrapper">
                            <a href="/#" className="button">All Videos</a>
                        </div>
                        {/* <!-- Dropdown --> */}
                        <div className={`dropdown is-spaced is-accent is-right dropdown-trigger  ${dropdownIsActive}`}
                            onClick={() => { setDropdownToggled(!dropdownToggled); }}>
                            <div>
                                <div className="button">
                                    <MoreVertical />
                                </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="/#" className="dropdown-item">
                                        <div className="media">
                                            <Edit3 />
                                            <div className="media-content">
                                                <h3>Manage</h3>
                                                <small>Manage your videos.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/#" className="dropdown-item">
                                        <div className="media">
                                            <Plus />
                                            <div className="media-content">
                                                <h3>Upload</h3>
                                                <small>Upload a new video.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="/#" className="dropdown-item">
                                        <div className="media">
                                            <Settings />
                                            <div className="media-content">
                                                <h3>Settings</h3>
                                                <small>Open video settings.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body has-flex-list">
                    {/* <!-- Videos --> */}
                    <div className="video-list">
                        {/* <!-- Video item --> */}
                        <div className="video-wrapper">
                            <div className="video-overlay"></div>
                            <div className="video-length">02:32</div>
                            <div className={`small-like ${isActive1}`} onClick={() => setToggled1(!toggled1)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/profile/about/videos/1.jpg" alt="" />
                            <div className="video-button" data-video-id="LTrzSSf0YlA">
                                <img src="../assets/img/icons/video/play.svg" alt="" />
                            </div>
                        </div>
                        {/* <!-- Video item --> */}
                        <div className="video-wrapper">
                            <div className="video-overlay"></div>
                            <div className="video-length">00:49</div>
                            <div className={`small-like ${isActive2}`} onClick={() => setToggled2(!toggled2)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/profile/about/videos/2.jpg" alt="" />
                            <div className="video-button">
                                <img src="../assets/img/icons/video/play.svg" alt="" />
                            </div>
                        </div>
                        {/* <!-- Video item --> */}
                        <div className="video-wrapper">
                            <div className="video-overlay"></div>
                            <div className="video-length">01:27</div>
                            <div className={`small-like ${isActive3}`} onClick={() => setToggled3(!toggled3)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/profile/about/videos/3.jpg" alt="" />
                            <div className="video-button">
                                <img src="../assets/img/icons/video/play.svg" alt="" />
                            </div>
                        </div>
                        {/* <!-- Video item --> */}
                        <div className="video-wrapper">
                            <div className="video-overlay"></div>
                            <div className="video-length">12:32</div>
                            <div className={`small-like ${isActive4}`} onClick={() => setToggled4(!toggled4)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/profile/about/videos/4.jpg" alt="" />
                            <div className="video-button">
                                <img src="../assets/img/icons/video/play.svg" alt="" />
                            </div>
                        </div>
                        {/* <!-- Video item --> */}
                        <div className="video-wrapper">
                            <div className="video-overlay"></div>
                            <div className="video-length">03:41</div>
                            <div className={`small-like ${isActive5}`} onClick={() => setToggled5(!toggled5)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/profile/about/videos/5.jpg" alt="" />
                            <div className="video-button">
                                <img src="../assets/img/icons/video/play.svg" alt="" />
                            </div>
                        </div>
                        {/* <!-- Video item --> */}
                        <div className="video-wrapper">
                            <div className="video-overlay"></div>
                            <div className="video-length">01:13</div>
                            <div className={`small-like ${isActive6}`} onClick={() => setToggled6(!toggled6)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/profile/about/videos/6.jpg" alt="" />
                            <div className="video-button">
                                <img src="../assets/img/icons/video/play.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Videos;
