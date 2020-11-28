import React, { useState, useEffect } from 'react';
import { Folder, MoreVertical, Tag, Image } from "react-feather";

function PhotosWidget() {
    const imgSrc = [
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
        "assets/img/demo/widgets/photos/1.jpg",
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
                <h4>Photos</h4>
                <div
                    className={`dropdown is-neutral is-spaced is-right dropdown-trigger ${dropdownIsActive}`}
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
                                    <Image />
                                    <div className="media-content">
                                        <h3>View Photos</h3>
                                        <small>View all your photos</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Tag />
                                    <div className="media-content">
                                        <h3>Tagged</h3>
                                        <small>View photos you are tagged in.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Folder />
                                    <div className="media-content">
                                        <h3>Albums</h3>
                                        <small>Open my albums.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-photos-widget">
                {imgSrc.map((src, index) => {
                    return (
                        <img key={index} src="https://via.placeholder.com/200x200" data-demo-src={src} alt="" />
                    );
                })}
                {/* <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/1.jpg" alt="" />
                <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/2.jpg" alt="">
                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/3.jpg" alt="">
                        <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/4.jpg" alt="">
                            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/5.jpg" alt="">
                                <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/6.jpg" alt="">
                                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/7.jpg" alt="">
                                        <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/8.jpg" alt="">
                                            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/9.jpg" alt="">
                                                <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/10.jpg" alt="">
                                                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/11.jpg" alt="">
                                                        <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/12.jpg" alt=""> */}
            </div>
        </>
    );
}

export default PhotosWidget;
