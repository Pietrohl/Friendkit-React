import React, { useState, useEffect } from 'react';
import {
    MoreVertical,
    User,
    Users,
    UploadCloud,
    Plus,
    Heart,
    Image
} from 'react-feather';
function Photos() {
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
            {/* <!-- Photos about card --> */}
            <div className="about-card">
                {/* <!-- Header --> */}
                <div className="header">
                    <div className="icon-title">
                        <i className="mdi mdi-camera"></i>
                        <h3>Photos</h3>
                    </div>
                    <div className="actions">
                        <div className="button-wrapper">
                            <a className="button">Albums</a>
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
                                    <a href="#" className="dropdown-item">
                                        <div className="media">
                                            <User />
                                            <div className="media-content">
                                                <h3>Of Me</h3>
                                                <small>View pictures of me.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item">
                                        <div className="media">
                                            <Users />
                                            <div className="media-content">
                                                <h3>With Me</h3>
                                                <small>View pictures with me.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a className="dropdown-item">
                                        <div className="media">
                                            <UploadCloud />
                                            <div className="media-content">
                                                <h3>Upload</h3>
                                                <small>Upload pictures from computer.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item">
                                        <div className="media">
                                            <Plus />
                                            <div className="media-content">
                                                <h3>Create Album</h3>
                                                <small>Create a new album.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <div className="media">
                                            <Image />
                                            <div className="media-content">
                                                <h3>View all</h3>
                                                <small>View all photos.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body has-flex-list">
                    {/* <!-- Photos --> */}
                    <div className="photo-list">
                        {/* <!-- Photo item --> */}
                        <div className="photo-wrapper">
                            <div className="photo-overlay"></div>
                            <div className={`small-like ${isActive1}`} onClick={() => setToggled1(!toggled1)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/400x400" data-demo-src="../assets/img/demo/profile/about/photos/1.jpg" alt="" />
                        </div>
                        {/* <!-- Photo item --> */}
                        <div className="photo-wrapper">
                            <div className="photo-overlay"></div>
                            <div className={`small-like ${isActive2}`} >
                                <div className="inner" onClick={() => setToggled2(!toggled2)}>
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/400x400" data-demo-src="../assets/img/demo/profile/about/photos/2.jpg" alt="" />
                        </div>
                        {/* <!-- Photo item --> */}
                        <div className="photo-wrapper">
                            <div className="photo-overlay"></div>
                            <div className={`small-like ${isActive3}`} onClick={() => setToggled3(!toggled3)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/400x400" data-demo-src="../assets/img/demo/profile/about/photos/3.jpg" alt="" />
                        </div>
                        {/* <!-- Photo item --> */}
                        <div className="photo-wrapper">
                            <div className="photo-overlay"></div>
                            <div className={`small-like ${isActive4}`} onClick={() => setToggled4(!toggled4)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/400x400" data-demo-src="../assets/img/demo/profile/about/photos/4.jpg" alt="" />
                        </div>
                        {/* <!-- Photo item --> */}
                        <div className="photo-wrapper">
                            <div className="photo-overlay"></div>
                            <div className={`small-like ${isActive5}`} onClick={() => setToggled5(!toggled5)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/400x400" data-demo-src="../assets/img/demo/profile/about/photos/5.jpg" alt="" />
                        </div>
                        {/* <!-- Photo item --> */}
                        <div className="photo-wrapper">
                            <div className="photo-overlay"></div>
                            <div className={`small-like ${isActive6}`} onClick={() => setToggled6(!toggled6)}>
                                <div className="inner">
                                    <div className="like-overlay"></div>
                                    <Heart />
                                </div>
                            </div>
                            <img src="https://via.placeholder.com/400x400" data-demo-src="assets/img/demo/profile/about/photos/6.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Photos;
