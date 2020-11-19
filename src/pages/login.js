import React, { Component } from 'react';
import friendkitWhite from '../assets/img/logo/friendkit-white.svg';

export default class Login extends Component {

    render() {
        return (

<div className="login-wrapper columns is-gapless">
    {/*Left Side (desktop Only)*/}
    <div className="column is-6 is-hidden-mobile hero-banner">
        <div className="hero is-fullheight is-login">
            <div className="hero-body">
                <div className="container">
                    <div className="left-caption">
                        <h2>Join an Exciting Social Experience.</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/*Right Side*/}
    <div className="column is-6">
        <div className="hero form-hero is-fullheight">
         {/*Logo*/}   
            <div className="logo-wrap">
                <div className="wrap-inner">
                    <img src={friendkitWhite} alt=""/>
                </div>
            </div>
            {/*Login Form*/}
            <div className="hero-body">
                <div className="form-wrapper">
                    {/*Avatar*/}
                    <div className="avatar">
                        <div className="badge">
                            <i data-feather="check"></i>
                        </div>
                        <img src="https://placehold.it/128x128" data-demo-src="assets/img/avatars/jenna.png" alt=""/>
                    </div>
                    {/*Form*/}
                    <div className="login-form">
                        <div className="field">
                            <div className="control">
                                <input className="input email-input" type="text" placeholder="jennadavis@gmail.com"/>
                                <div className="input-icon">
                                    <i data-feather="user"></i>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input className="input password-input" type="password" placeholder="●●●●●●●"/>
                                <div className="input-icon">
                                    <i data-feather="lock"></i>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="button is-solid primary-button raised is-rounded is-fullwidth">Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="section forgot-password">
                        <div className="has-text-centered">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            
        )
    }
}