import React, { useState, useEffect } from 'react';
import {
    MoreVertical,
    Video,
    Tag
} from "react-feather";

function VideosWidget() {
    const videoSrc = [
        "assets/img/demo/widgets/videos/1.jpg",
        "assets/img/demo/widgets/videos/2.jpg",
        "assets/img/demo/widgets/videos/3.jpg"
    ];
    const [dropdownIsActive, setDropdownIsActive] = useState('');
    const [dropdownToggled, setDropdownToggled] = useState(false);
    useEffect(() => {
        if (dropdownToggled) {
            setDropdownIsActive('is-active');
        } else {
            setDropdownIsActive('');
        }
    }, [dropdownToggled]);
    return (
        <>
            <div className="box-heading">
                <h4>Videos</h4>
                <div className={`dropdown is-neutral is-spaced is-right dropdown-trigger ${dropdownIsActive}`}
                    onClick={() => { setDropdownToggled(!dropdownToggled); }}
                >
                    <div>
                        <div className="button">
                            <MoreVertical />
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Video />
                                    <div className="media-content">
                                        <h3>View Videos</h3>
                                        <small>View all your videos</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Tag />
                                    <div className="media-content">
                                        <h3>Tagged</h3>
                                        <small>View videos you are tagged in.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-videos-widget">


                {videoSrc.map((src, index) => {
                    return (
                        <div key={index} className="video-container">
                            <img
                                src="https://via.placeholder.com/200x200"
                                data-demo-src={src}
                                alt="" />
                            <div className="video-button">
                                <img src="assets/img/icons/video/play.svg" alt="" />
                            </div>
                            <div className="video-overlay"></div>
                        </div>
                    );
                })}

            </div>


        </>
    );
}

export default VideosWidget;
