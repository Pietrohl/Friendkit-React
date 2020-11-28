import React, { useEffect, useState } from 'react';
import { Search } from "react-feather";

function BasicInfos() {
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
            {/* <!-- Basic Infos widget --> */}
            {/* <!-- html/partials/pages/profile/timeline/widgets/basic-infos-widget.html --> */}
            <div className="box-heading">
                <h4>Basic Infos</h4>
                <div className={`dropdown is-neutral is-spaced is-right dropdown-trigger ${dropdownIsActive}`} onClick={() => { setDropdownToggled(!dropdownToggled); }}>
                    <div>
                        <div className="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="profile-about.html" className="dropdown-item">
                                <div className="media">
                                    <i data-feather="eye"></i>
                                    <div className="media-content">
                                        <h3>View</h3>
                                        <small>View user details.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Search />
                                    <div className="media-content">
                                        <h3>Related</h3>
                                        <small>Search for related users.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basic-infos-wrapper">
                <div className="card is-profile-info">
                    <div className="info-row">
                        <div>
                            <span>Studied at</span>
                            <a href="/#" className="is-inverted">Georgetown University</a>
                        </div>
                        <i className="mdi mdi-school"></i>
                    </div>
                    <div className="info-row">
                        <div>
                            <span>Married to</span>
                            <a href="/#" className="is-inverted">Dan Walker</a>
                        </div>
                        <i className="mdi mdi-heart"></i>
                    </div>
                    <div className="info-row">
                        <div>
                            <span>From</span>
                            <a href="/#" className="is-inverted">Melbourne, AU</a>
                        </div>
                        <i className="mdi mdi-earth"></i>
                    </div>
                    <div className="info-row">
                        <div>
                            <span>Lives in</span>
                            <a href="/#" className="is-inverted">Los Angeles, CA</a>
                        </div>
                        <i className="mdi mdi-map-marker"></i>
                    </div>
                    <div className="info-row">
                        <div>
                            <span>Followers</span>
                            <a href="/#" className="is-muted">258 followers</a>
                        </div>
                        <i className="mdi mdi-bell-ring"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasicInfos;
