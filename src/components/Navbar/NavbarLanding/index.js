import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/scss/core.scss';
import { useViewport } from '../../../Hooks/useViewport'
import logoBold from '../../../assets/img/logo/friendkit-bold.svg'
import logoWhite from '../../../assets/img/logo/friendkit-white.svg'
import logo from '../../../assets/img/logo/friendkit.svg'

const BasicNavbar = () => {

    const [navScroll, setNavScroll] = useState();

    const  navTop = "navbar is-inline-flex is-transparent no-shadow no-background is-landing is-hidden-mobile";
    const  navScrolled = "navbar is-inline-flex is-transparent is-landing is-hidden-mobile";
    
    useLayoutEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 80) {
                setNavScroll((true));
            }else {
                setNavScroll((false))

            }


        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);




    return (
        <>
        <div className={navScroll?navScrolled :navTop }>
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img className="logo" src={logoBold} alt="" />
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <Link to="#buy">Buy</Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="#demos-section">Demos</Link>
                        </div>
                        <div className="navbar-item">
                            <Link>Docs</Link>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="navbar-item">
                                <Link to="/login">Login</Link>
                            </div>
                            <Link id="signup-button" to="/signup" className="button is-cta is-solid primary-button raised">
                                Sign Up
                        </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}

const NavbarMobile = () => {
const [navScroll, setNavScroll] = useState();
const [navMenu, setNavMenu] = useState(false);

const  navTop = "navbar mobile-navbar is-landing is-hidden-desktop no-shadow no-background";
const  navScrolled = "navbar mobile-navbar is-landing is-hidden-desktop";

useLayoutEffect(() => {
    const onScroll = () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 80) {
            setNavScroll((true));
        }else {
            setNavScroll((false))

        }


    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
}, []);

 return (
    // Remove no-Shadow and no-Background classes when scroll down
    <nav className={navScroll?navScrolled :navTop } aria-label="main navigation">
        {/* <!-- Brand --> */}
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <img className="dark-mobile-logo" src={logo} alt="" />
                <img className="light-mobile-logo" src={logoWhite} alt="" />
            </Link>

            {/* <!-- Mobile menu toggler icon --> */}
            <div className={`navbar-burger ${navMenu? `is-active` : ""}`} onClick={()=> setNavMenu(!navMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        {/* <!-- Navbar mobile menu --> */}
        <div className={`navbar-menu ${navMenu? `is-active` : ""}`}>
            {/* <!-- Account --> */}
            <div className="navbar-item has-dropdown">
                <div className="navbar-link">
                    <img src="https://via.placeholder.com/150x150" data-demo-src={logo} alt="" />
                    <span className="is-heading">Guest</span>
                </div>

                {/* <!-- Mobile Dropdown --> */}
                <div className="navbar-dropdown">
                    <Link to="#" className="navbar-item">Buy</Link>
                    <Link to="#demos-section" className="navbar-item">Demos</Link>
                    <Link to="https://docs.friendkit.cssninja.io" className="navbar-item">Docs</Link>
                    <Link to="login" className="navbar-item">Login</Link>
                    <Link to="signup" className="button is-fullwidth is-solid accent-button">Sign Up</Link>
                </div>
            </div>
        </div>
    </nav>

)}

export const Navbar = () => {

    const { width } = useViewport();
    const breakpoint = 620;

    useEffect((width, breakpoint) => (width < breakpoint ? <NavbarMobile /> : <BasicNavbar />))

    return width < breakpoint ? <NavbarMobile /> : <BasicNavbar />;

} 