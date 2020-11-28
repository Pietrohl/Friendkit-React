import React, { useState, useEffect } from 'react';
import { Compass, Globe, MoreVertical } from "react-feather";

function TripsWidget() {
    const tripItems = [
        {
            imgSrc: "../../../../assets/img/demo/widgets/trips/1.jpg",
            location: "New York, NY, USA",
            visited: 4
        },
        {
            imgSrc: "../../../../assets/img/demo/widgets/trips/1.jpg",
            location: "New York, NY, USA",
            visited: 4
        },
        {
            imgSrc: "../../../../assets/img/demo/widgets/trips/1.jpg",
            location: "New York, NY, USA",
            visited: 4
        },
        {
            imgSrc: "../../../../assets/img/demo/widgets/trips/1.jpg",
            location: "New York, NY, USA",
            visited: 4
        },
        {
            imgSrc: "../../../../assets/img/demo/widgets/trips/1.jpg",
            location: "New York, NY, USA",
            visited: 4
        },
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
                <h4>Trips</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                    <div>
                        <div className="button">
                            <MoreVertical />
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Globe />
                                    <div className="media-content">
                                        <h3>View my Trips</h3>
                                        <small>View all your trips</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <Compass />
                                    <div className="media-content">
                                        <h3>Suggestions</h3>
                                        <small>View trendy suggestions.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trip-cards-list">
                <div className="card is-trip-card">
                    {tripItems.map((item, index) => {
                        return (
                            <div className="trip-item" key={index}>
                                <img src="https://via.placeholder.com/200x200" data-demo-src={item.imgSrc} alt="" />
                                <div className="text-content">
                                    <a>{item.location}</a>
                                    <span>{item.visited} months ago</span>
                                </div>
                            </div>
                        );
                    }
                    )}
                </div>
            </div>
            <div className="box-heading">
                <h4>Events</h4>
                <div className={`dropdown is-neutral is-spaced is-right dropdown-trigger ${dropdownIsActive}`}
                    onClick={() => { setDropdownToggled(!dropdownToggled); }}
                >
                    <div>
                        <div className="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <i data-feather="calendar"></i>
                                    <div className="media-content">
                                        <h3>All Events</h3>
                                        <small>View all your events</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <i data-feather="search"></i>
                                    <div className="media-content">
                                        <h3>Search</h3>
                                        <small>Search for events.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="/#" className="dropdown-item">
                                <div className="media">
                                    <i data-feather="compass"></i>
                                    <div className="media-content">
                                        <h3>Suggestions</h3>
                                        <small>View trendy suggestions.</small>
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

export default TripsWidget;
