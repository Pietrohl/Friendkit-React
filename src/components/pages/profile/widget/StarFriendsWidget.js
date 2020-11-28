import React, { useEffect, useState } from 'react';
import { Briefcase, MoreVertical, Star, Users } from "react-feather";

function StarFriendsWidget() {
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
            <div className="box-heading">
                <h4>Friends</h4>
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
                            <a className="dropdown-item">
                                <div className="media">
                                    <Users />
                                    <div className="media-content">
                                        <h3>All Friends</h3>
                                        <small>View all friends.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <i data-feather="heart"></i>
                                    <div className="media-content">
                                        <h3>Family</h3>
                                        <small>View family members.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Briefcase />
                                    <div className="media-content">
                                        <h3>Work Relations</h3>
                                        <small>View work related friends.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="friend-cards-list">
                <div className="card is-friend-card">
                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" data-user-popover="1" />
                        <div className="text-content">
                            <a>Dan Walker</a>
                            <span>4 mutual friend(s)</span>
                        </div>
                        <div className={`star-friend ${isActive1}`} onClick={() => setToggled1(!toggled1)}>
                            <Star />
                        </div>
                    </div>

                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" data-user-popover="7" />
                        <div className="text-content">
                            <a>Milly Augustine</a>
                            <span>3 mutual friend(s)</span>
                        </div>
                        <div className={`star-friend ${isActive2}`} onClick={() => setToggled2(!toggled2)}>
                            <Star />
                        </div>

                    </div>

                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" data-user-popover="5" />
                        <div className="text-content">
                            <a>Edward Mayers</a>
                            <span>35 mutual friend(s)</span>
                        </div>
                        <div className={`star-friend ${isActive3}`} onClick={() => setToggled3(!toggled3)}>
                            <Star />
                        </div>
                    </div>

                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/stella.jpg" alt="" data-user-popover="2" />
                        <div className="text-content">
                            <a>Stella Bergmann</a>
                            <span>48 mutual friend(s)</span>
                        </div>
                        <div className={`star-friend ${isActive4}`} onClick={() => setToggled4(!toggled4)}>
                            <Star />
                        </div>
                    </div>

                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" data-user-popover="6" />
                        <div className="text-content">
                            <a>Elise Walker</a>
                            <span>1 mutual friend(s)</span>
                        </div>
                        <div className={`star-friend ${isActive5}`} onClick={() => setToggled5(!toggled5)}>
                            <Star />
                        </div>
                    </div>

                    <div className="friend-item">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt="" data-user-popover="9" />
                        <div className="text-content">
                            <a>Nelly Schwartz</a>
                            <span>11 mutual friend(s)</span>
                        </div>
                        <div className={`star-friend ${isActive6}`} onClick={() => setToggled6(!toggled6)}>
                            <Star />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default StarFriendsWidget;
