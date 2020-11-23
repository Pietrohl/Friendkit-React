import React from 'react';
import friends from '../../../assets/img/illustrations/characters/friends.svg'
import Particles from 'react-particles-js';


export const Hero = () =>
    (
        <div className="hero is-fullheight landing-hero-wrapper">
            <Particles
                id='particles-js'
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                        color: {
                            value: '#5596e6'
                        },
                        shape: {
                            type: 'circle',

                            stroke: {
                                width: 5,
                                color: '#5596e6'
                            },
                            fill: {
                                opacity: 1,
                                color: '#5596e6'
                            }
                        }
                    },
                }}
            />
            <div className="hero-body">
                <div className="container">
                    <div className="columns landing-caption is-vcentered">
                        <div className="column is-6">
                            <img src={friends} alt="" />
                        </div>
                        <div className="column is-5 is-offset-1">
                            <h2>Friendkit.</h2>
                            <h3>Social Media UI Kit.</h3>
                            <div className="buttons">
                                <a href="#landing-start" className="button">Get Started</a>
                                <button id="tour-start" className="button is-hidden-mobile">Take The Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )