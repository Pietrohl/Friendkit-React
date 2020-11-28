import React, { useState, useEffect } from 'react';
import {
    MoreVertical,
    User,
    MessageSquare,
    Delete,
} from 'react-feather';

function FriendsDropDown() {
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
                                <User />
                                <div className="media-content">
                                    <h3>View Profile</h3>
                                    <small>Open this user profile.</small>
                                </div>
                            </div>
                        </a>
                        <a href="/#" className="dropdown-item">
                            <div className="media">
                                <MessageSquare />
                                <div className="media-content">
                                    <h3>Message</h3>
                                    <small>Send a message to this user.</small>
                                </div>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="/#" className="dropdown-item">
                            <div className="media">
                                <Delete />
                                <div className="media-content">
                                    <h3>Unfriend</h3>
                                    <small>Remove from friend list.</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FriendsDropDown;
