import React, { useState, useEffect } from 'react';
import {
    MoreVertical,
} from 'react-feather';
import FriendsDropDown from "./dropdown/FriendsDropDown";
import HeaderDropDown from './dropdown/HeaderDropDown';
function Friends() {
    const [dropdownIsActive, setDropdownIsActive] = useState('');
    const [dropdownToggled, setDropdownToggled] = useState(false);
    useEffect(() => {
        if (dropdownToggled) {
            setDropdownIsActive('is-active');
        } else {
            setDropdownIsActive('');
        }
    }, [dropdownToggled]);
    const friends = [
        {
            src: "../assets/img/avatars/nelly.png",
            name: "Nelly Schwartz",
            totalFriends: 182,
        },
        {
            src: "../assets/img/avatars/mike.jpg",
            name: "Mike Lasalle",
            totalFriends: 200,
        },
        {
            src: "../assets/img/avatars/stella.jpg",
            name: "Stella Bergmann",
            totalFriends: 152,
        },
        {
            src: "../assets/img/avatars/david.jpg",
            name: "David Kim",
            totalFriends: 173,
        },
        {
            src: "../assets/img/avatars/elise.jpg",
            name: "Elise Walker",
            totalFriends: 182,
        },
        {
            src: "../assets/img/avatars/milly.jpg",
            name: "Milly Augustine",
            totalFriends: 90,
        }
    ];
    return (
        <>
            {/* <!-- Friends about card --> */}
            <div className="about-card">
                {/* <!-- Header --> */}
                <div className="header">
                    <div className="icon-title">
                        <i className="mdi mdi-account-group"></i>
                        <h3>Friends</h3>
                    </div>
                    <div className="actions">
                        <div className="button-wrapper">
                            <a href="/#" className="button">Invitations</a>
                            <div className="indicator">
                                <span>8</span>
                            </div>
                        </div>
                        <div className={`dropdown is-spaced is-accent is-right dropdown-trigger  ${dropdownIsActive}`}
                        onClick={() => { setDropdownToggled(!dropdownToggled); }}>
                            <div >
                                <div className="button" >
                                    <MoreVertical />
                                </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <HeaderDropDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="columns friends-columns is-multiline">
                        {/* <!-- Friend --> */}
                        {friends.map((friend, index) => {
                            return (
                                <div className="column is-6" key={index}>
                                    <div className="friend-small-card">
                                        <img src="https://via.placeholder.com/150x150" data-demo-src={friend.src} data-user-popover="9" alt="" />
                                        <div className="meta">
                                            <span>{friend.name}</span>
                                            <span>{friend.totalFriends} Friends</span>
                                        </div>
                                        <FriendsDropDown />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Friends;
