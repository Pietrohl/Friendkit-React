import React, { useState, useEffect } from 'react';
import {
    MoreVertical,
    Clock,
    MapPin,
    Plus,
    Star

} from 'react-feather';
function Places() {
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
            {/* <!-- Places about card --> */}
            <div className="about-card">
                {/* <!-- Header --> */}
                <div className="header">
                    <div className="icon-title">
                        <i className="mdi mdi-map-outline"></i>
                        <h3>Places</h3>
                    </div>
                    <div className="actions">
                        <div className="button-wrapper">
                            <a href="/#" className="button">View All</a>
                        </div>
                        {/* <!-- Dropdown --> */}
                        <div className={`dropdown is-spaced is-accent is-right dropdown-trigger ${dropdownIsActive}`}
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
                                            <Clock />
                                            <div className="media-content">
                                                <h3>Recent</h3>
                                                <small>Show recent places.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/#" className="dropdown-item">
                                        <div className="media">
                                            <MapPin />
                                            <div className="media-content">
                                                <h3>Visited</h3>
                                                <small>Show visited places.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="/#" className="dropdown-item">
                                        <div className="media">
                                            <Plus />
                                            <div className="media-content">
                                                <h3>Add</h3>
                                                <small>Add a new place.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body has-flex-list">
                    {/* <!-- Places --> */}
                    <div className="place-list">
                        {/* <!-- Place item --> */}
                        <div className="place-wrapper">
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/unsplash/places/16.jpg" alt="" />
                            <div className="foot">
                                <a href="/#" className="place-name">Melbourne</a>
                                <div className="rating">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Place item --> */}
                        <div className="place-wrapper">
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/unsplash/places/17.jpg" alt="" />
                            <div className="foot" >
                                <a href="/#" className="place-name">Dany's Burgers</a>
                                <div className="rating">
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Place item --> */}
                        <div className="place-wrapper">
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/unsplash/places/18.jpg" alt="" />
                            <div className="foot">
                                <a href="/#" className="place-name">Vethnics Fashion</a>
                                <div className="rating">
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <Star />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Place item --> */}
                        <div className="place-wrapper">
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/unsplash/places/19.jpg" alt="" />
                            <div className="foot">
                                <a href="/#" className="place-name">The Smoothie Bar</a>
                                <div className="rating">
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Place item --> */}
                        <div className="place-wrapper">
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/unsplash/places/20.jpg" alt="" />
                            <div className="foot" >
                                <a href="/#" className="place-name">Eiffel Tower</a>
                                <div className="rating">
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Place item --> */}
                        <div className="place-wrapper">
                            <img src="https://via.placeholder.com/800x600" data-demo-src="../assets/img/demo/unsplash/places/21.jpg" alt="" />
                            <div className="foot" >
                                <a href="/#" className="place-name">Lennie's Fair</a>
                                <div className="rating">
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                    <span className='is-checked'><Star /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Places;
