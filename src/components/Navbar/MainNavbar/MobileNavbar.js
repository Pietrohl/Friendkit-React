import {useState} from 'react'
import { FriendRequestDropdown } from "../dropdowns/friend-requests-dropdown";
import { NotificationsDropdown } from "../dropdowns/notifications-dropdown";
import { MessagesDropdown } from '../dropdowns/messages-dropdown';
import logo from '../../../assets/img/logo/friendkit.svg';
import { Activity, Grid, Hexagon, LifeBuoy, MessageSquare, Settings, ShoppingCart, User } from "react-feather";

export const MobileNavbar = (props) => {
    let [isActive, setisActive] = useState(false);

    
    
    return(
    <nav class={`navbar mobile-navbar is-hidden-desktop ${props.navScroll ? "" : `no-shadow`}`} aria-label="main navigation">
        {/* Brand */}
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src={logo} alt="" />
            </a>


<FriendRequestDropdown/>
            
<NotificationsDropdown/>

<MessagesDropdown/>

            <div class="navbar-item is-icon open-chat">
                <a class="icon-link is-primary" href="javascript:void(0);">
                    <MessageSquare/>
                    <span class="indicator"></span>
                </a>
            </div>

            <div id="mobile-explorer-trigger" class="navbar-item is-icon">
                <a class="icon-link is-primary">
                    <Grid/>
                </a>
            </div>
            {/* Mobile menu toggler icon */}
            <div class={`navbar-burger ${isActive? 'is-active': ''}`} onClick={()=> setisActive(!isActive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        {/* Navbar mobile menu */}
        <div class={`navbar-menu ${isActive? 'is-active': ''}`}>
            {/* Account */}
            <div class="navbar-item has-dropdown is-active">
                <div class="navbar-link">
                    <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                    <span class="is-heading">Jenna</span>
                </div>

                {/* Mobile Dropdown */}
                <div class="navbar-dropdown">
                    <a href="#" class="navbar-item is-flex is-mobile-icon">
                        <User/><span>Profile</span>
                    </a>
                    <a href="#" class="navbar-item is-flex is-mobile-icon">
                        <span><ShoppingCart/>Cart</span>
                        <span class="menu-badge">3</span>
                    </a>
                    <a href="#" class="navbar-item is-flex is-mobile-icon">
                        <span><Activity/>Feed</span>
                        <span class="menu-badge">87</span>
                    </a>
                    <a href="#" class="navbar-item is-flex is-mobile-icon">
                        <span><Settings/>Settings</span>
                    </a>
                    <a href="#" class="navbar-item is-flex is-mobile-icon">
                        <span><Hexagon/>Logout</span>
                    </a>
                </div>
            </div>

            {/* More */}
            <div class="navbar-item has-dropdown">
                <a class="navbar-link">
                    <LifeBuoy/>
                    <span class="is-heading">Assistance</span>
                </a>

                {/* Mobile Dropdown */}
                <div class="navbar-dropdown">
                    <a href="#" class="navbar-item">Help</a>
                    <a href="#" class="navbar-item">Support</a>
                </div>
            </div>
        </div>
    </nav>
)}