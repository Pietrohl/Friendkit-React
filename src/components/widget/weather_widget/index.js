import React from 'react';
import backgroundSvg from '../../../assets/img/illustrations/cards/weather-bg.svg'
import {Settings, MapPin, MoreVertical, RotateCcw, Trash2,Sun, CloudLightning, CloudDrizzle, CloudRain } from 'react-feather';


const myStyle = {
    backgroundImage: "url(" + backgroundSvg + ")"
}

export const WeatherWidget = () => (
<div className="card is-weather-card has-background-image" style={myStyle}>
    <div className="card-heading">
        <div className="dropdown is-spaced is-accent is-right dropdown-trigger is-light">
            <div>
                <div className="button">
                    <MoreVertical/>
                </div>
            </div>
            <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <MapPin/>
                            <div className="media-content">
                                <h3>Change City</h3>
                                <small>Change the displayed city.</small>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="dropdown-item">
                        <div className="media">
                           <RotateCcw/>
                            <div className="media-content">
                                <h3>Synchronize</h3>
                                <small>Synchronize with a weather source.</small>
                            </div>
                        </div>
                    </a>
                    <a className="dropdown-item">
                        <div className="media">
                            <Settings/>
                            <div className="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                            </div>
                        </div>
                    </a>
                    <hr className="dropdown-divider"/>
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <Trash2/>
                            <div className="media-content">
                                <h3>Remove</h3>
                                <small>Removes this widget from your feed.</small>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="card-body">
        <div className="temperature">
            <span>71</span>
        </div>
        <div className="weather-icon">
            <div>
                <Sun/>
                <h4>Sunny</h4>
                <div className="details">
                    <span>Real Feel: 78° </span>
                    <span>Rain Chance: 5%</span>
                </div>
            </div>
        </div>
        <div className="previsions">
            <div className="day">
                <span>Mon</span>
                <Sun/>
                <span>69°</span>
            </div>
            <div className="day">
                <span>Tue</span>
                <CloudLightning/>
                <span>74°</span>
            </div>
            <div className="day">
                <span>Wed</span>
                <CloudLightning/>
                <span>73°</span>
            </div>
            <div className="day">
                <span>Thu</span>
                <Sun/>
                <span>68°</span>
            </div>
            <div className="day">
                <span>Fri</span>
                <CloudDrizzle/>
                <span>55°</span>
            </div>
            <div className="day">
                <span>Sat</span>
                <CloudRain/>
                <span>58°</span>
            </div>
            <div className="day">
                <span>Sun</span>
                <Sun/>
                <span>64°</span>
            </div>
        </div>
        <div className="current-date-location has-text-centered"> 
            <span className="date">Sunday, 18th 2018</span>
            <span className="location"> <MapPin/> Los Angeles, CA</span>
        </div>
    </div>
</div>

)