import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Heart,
    HelpCircle,
    Hexagon,
    LifeBuoy,
    Mail,
    MessageSquare,
    MoreVertical,
    Search,
    Settings,
    ShoppingCart,
    X, Bell, Plus, Book, User, Activity
} from 'react-feather';
import CartDropDown from "./Navbar/CartDropDown";
import FirendRequests from "./Navbar/FirendRequests";
import Messages from "./Navbar/Messages";
import Notifications from "./Navbar/Notifications";
import SearchBar from "./Navbar/SearchBar";
import Account from "./Navbar/Account";
import Explorer from "./Navbar/Explorer";
function Navbar() {
    const [friendIsActive, setFriendIsActive] = useState(false);
    const [notificationsisActive, setNotificationsIsActive] = useState(false);
    const [messagesIsActive, setMessagesIsActive] = useState(false);
    const [isCartActive, setCartIsActive] = useState(false);
    const [accountIsActive, setAccountIsActive] = useState(false);
    const [explorerIsActive, setExplorerIsActive] = useState(false);


    useEffect(() => {
        if (friendIsActive) {
            setNotificationsIsActive(false);
            setMessagesIsActive(false);
            setCartIsActive(false);
            setAccountIsActive(false);
            setExplorerIsActive(false);
        }
        if (notificationsisActive) {
            setFriendIsActive(false);
            setMessagesIsActive(false);
            setCartIsActive(false);
            setAccountIsActive(false);
            setExplorerIsActive(false);
        }
        if (messagesIsActive) {
            setNotificationsIsActive(false);
            setFriendIsActive(false);
            setCartIsActive(false);
            setAccountIsActive(false);
            setExplorerIsActive(false);
        }
        if (isCartActive) {
            setNotificationsIsActive(false);
            setFriendIsActive(false);
            setMessagesIsActive(false);
            setAccountIsActive(false);
            setExplorerIsActive(false);
        }
        if (accountIsActive) {
            setNotificationsIsActive(false);
            setFriendIsActive(false);
            setMessagesIsActive(false);
            setCartIsActive(false);
            setExplorerIsActive(false);
        }
        if (explorerIsActive) {
            setNotificationsIsActive(false);
            setFriendIsActive(false);
            setMessagesIsActive(false);
            setCartIsActive(false);
            setAccountIsActive(false);
        }
    }, [
        friendIsActive,
        notificationsisActive,
        messagesIsActive,
        isCartActive,
        accountIsActive,
        explorerIsActive]);
    return (
        <>
            <div id="main-navbar" className="navbar is-inline-flex is-transparent no-shadow is-hidden-mobile">
                <div className="container is-fluid">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img className="logo" src='../assets/img/logo/friendkit-bold.svg' width="112" height="28" alt="Logo" />
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            {/* <!-- Navbar Search --> */}

                            <div className="navbar-item is-icon drop-trigger" onClick={() => setFriendIsActive(!friendIsActive)}>
                                <span className="icon-link is-secondary is-friends">
                                    <Heart />
                                    <span className="indicator"></span>
                                </span>
                                {friendIsActive && <FirendRequests />}
                            </div>
                            <div className="navbar-item is-icon drop-trigger" onClick={() => setNotificationsIsActive(!notificationsisActive)}>
                                <span className="icon-link">
                                    <Bell />
                                    <span className="indicator"></span>
                                </span>
                                {notificationsisActive && <Notifications />}
                            </div>
                            <div className="navbar-item is-icon drop-trigger" onClick={() => setMessagesIsActive(!messagesIsActive)}>
                                <span className="icon-link is-active" >
                                    <Mail />
                                    <span className="indicator"></span>
                                </span>
                                {messagesIsActive && <Messages />}
                            </div>
                            <div className="navbar-item is-icon open-chat">
                                <span className="icon-link is-primary">
                                    <MessageSquare />
                                    <span className="indicator"></span>
                                </span>
                            </div>
                            <div id="explorer-trigger" className='navbar-item is-icon' onClick={() => setExplorerIsActive(!explorerIsActive)}>
                                <span className="icon-link is-primary">
                                    <i className="mdi mdi-apps"></i>
                                </span>
                                {explorerIsActive && <Explorer />}
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div id="global-search" className="control">
                                    <input id="tipue_drop_input" className="input is-rounded" type="text" placeholder="Search" required />
                                    <span id="clear-search" className="reset-search">
                                        <X />
                                    </span>
                                    <span className="search-icon">
                                        <Search />
                                    </span>
                                    <span className="drop-icon">
                                        <MoreVertical />
                                    </span>

                                    {/* <!-- Search Dropdown --> */}
                                    <SearchBar />
                                    <div id="tipue_drop_content"></div>
                                </div>
                            </div>
                            <div className="navbar-item is-cart" onClick={() => setCartIsActive(!isCartActive)}>
                                <div className="cart-button">
                                    <ShoppingCart />
                                    <div className="cart-count">
                                        <span>3</span>
                                    </div>
                                </div>
                                {/* <!-- Cart dropdown --> */}
                                {isCartActive && <CartDropDown />}
                            </div>

                            {accountIsActive
                                ? <div id="account-dropdown"
                                    className='navbar-item is-account drop-trigger has-caret'
                                    onClick={() => setAccountIsActive(!accountIsActive)}>
                                    <div className="user-image">
                                        <img src="https://via.placeholder.com/400x400" data-demo-src="../assets/img/avatars/jenna.png" alt="" />
                                        <span className="indicator"></span>
                                    </div>

                                    <Account />
                                </div>
                                : <div id="account-dropdown"
                                    className='navbar-item is-account drop-trigger has-caret'
                                    onClick={() => setAccountIsActive(!accountIsActive)}>
                                    <div className="user-image">
                                        <img src="https://via.placeholder.com/400x400" data-demo-src="../assets/img/avatars/jenna.png" alt="" />
                                        <span className="indicator"></span>
                                    </div>

                                </div>}

                            <div className="navbar-item is-plus-menu is-hidden">
                                <a id="plus-menu" className="button action-button is-solid primary-button raised" href='/#'>
                                    <Plus />
                                </a>
                                <div className="plus-drop">
                                    <div className="drop-content">
                                        <a href='/#'>
                                            <Book />
                                            <div className="meta">
                                                <span>Guides</span>
                                                <span>Learn everything fast</span>
                                            </div>
                                        </a>
                                        <a href='/#'>
                                            <HelpCircle />
                                            <div className="meta">
                                                <span>FAQ</span>
                                                <span>Most asked questions</span>
                                            </div>
                                        </a>
                                        <a href='/#'>
                                            <LifeBuoy />
                                            <div className="meta">
                                                <span>Assistance</span>
                                                <span>Get in touch with support</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar mobile-navbar is-hidden-desktop" aria-label="main navigation">
                {/* <!-- Brand --> */}
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="../assets/img/logo/friendkit.svg" alt="" />
                    </a>

                    <div className="navbar-item is-icon drop-trigger">
                        <a className="icon-link is-secondary is-friends" href="/#">
                            <Heart />
                            <span className="indicator"></span>
                        </a>
                        <FirendRequests />
                    </div>
                    <div className="navbar-item is-icon drop-trigger">
                        <a className="icon-link" href="/#">
                            <Bell />
                            <span className="indicator"></span>
                        </a>
                        <Notifications />
                    </div>
                    <div className="navbar-item is-icon drop-trigger">
                        <a className="icon-link is-active" href="/#">
                            <Mail />
                            <span className="indicator"></span>
                        </a>
                        <Messages />
                    </div>
                    <div className="navbar-item is-icon open-chat">
                        <a className="icon-link is-primary" href="/#">
                            <MessageSquare />
                            <span className="indicator"></span>
                        </a>
                    </div>

                    <div id="mobile-explorer-trigger" className="navbar-item is-icon">
                        <a className="icon-link is-primary" href="/#">
                            <i className="mdi mdi-apps"></i>
                        </a>
                    </div>

                    {/* <!-- Mobile menu toggler icon --> */}
                    <div className="navbar-burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {/* <!-- Navbar mobile menu --> */}
                <div className="navbar-menu">
                    {/* <!-- Account --> */}
                    <div className="navbar-item has-dropdown is-active">
                        <div className="navbar-link">
                            <img src="https://via.placeholder.com/150x150" data-demo-src="../assets/img/avatars/jenna.png" alt="" />
                            <span className="is-heading">Jenna</span>
                        </div>

                        {/* <!-- Mobile Dropdown --> */}
                        <div className="navbar-dropdown">
                            <a href="/#" className="navbar-item is-flex is-mobile-icon">
                                <span><User />Profile</span>
                            </a>
                            <a href="/#" className="navbar-item is-flex is-mobile-icon">
                                <span><ShoppingCart />Cart</span>
                                <span className="menu-badge">3</span>
                            </a>
                            <a href="/#" className="navbar-item is-flex is-mobile-icon">
                                <span><Activity />Feed</span>
                                <span className="menu-badge">87</span>
                            </a>
                            <a href="/#" className="navbar-item is-flex is-mobile-icon">
                                <span><Settings />Settings</span>
                            </a>
                            <a href="/#" className="navbar-item is-flex is-mobile-icon">
                                <span><Hexagon />Logout</span>
                            </a>
                        </div>
                    </div>

                    {/* <!-- More --> */}
                    <div className="navbar-item has-dropdown">
                        <a className="navbar-link" href="/#">
                            <LifeBuoy />
                            <span className="is-heading">Assistance</span>
                        </a>

                        {/* <!-- Mobile Dropdown --> */}
                        <div className="navbar-dropdown">
                            <a href="/#" className="navbar-item">Help</a>
                            <a href="/#" className="navbar-item">Support</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
