import React, { useLayoutEffect, useState } from 'react';
import { MobileNavbar } from './MobileNavbar'
import logoBold from '../../../assets/img/logo/friendkit-bold.svg'
import { Book, HelpCircle, LifeBuoy, MessageSquare, Plus, Grid } from 'react-feather';
import { FriendRequestDropdown } from '../dropdowns/friend-requests-dropdown';
import { NotificationsDropdown } from '../dropdowns/notifications-dropdown';
import { MessagesDropdown } from '../dropdowns/messages-dropdown';
import { SearchWidget } from '../widget/SearchWidget';
import { CartDropdown } from '../dropdowns/cart-dropdown';
import { AccountDropdown } from '../dropdowns/account-dropdown';

const BasicNavbar = (props) => (
    <div id="main-navbar" class={`navbar is-inline-flex is-transparent is-hidden-mobile ${props.navScroll ? "" : `no-shadow`}`}>
        <div class="container is-fluid">
            <div class="navbar-brand">
                <a href="/" class="navbar-item">
                    <img class="logo" src={logoBold} width="112" height="28" alt="" />
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    {/* Navbar Search */}


                    <FriendRequestDropdown />

                    <NotificationsDropdown />

                    <MessagesDropdown />
                    <div class="navbar-item is-icon open-chat">
                        <a class="icon-link is-primary" href="javascript:void(0);">

                            <MessageSquare />

                            <span class="indicator"></span>
                        </a>
                    </div>

                    <div id="explorer-trigger" class="navbar-item is-icon">
                        <a class="icon-link is-primary">
                            <Grid/>
                        </a>
                    </div>
                </div>

                <div class="navbar-end">

                    <SearchWidget />
                    {/* {{> search - widget}} */}

                    <CartDropdown />
                    {/* {{> cart - dropdown}} */}

                    <AccountDropdown />
                    {/* {{> account - dropdown}} */}

                    <div class="navbar-item is-plus-menu is-hidden">
                        <a id="plus-menu" class="button action-button is-solid primary-button raised">
                            <Plus />
                        </a>
                        <div class="plus-drop">
                            <div class="drop-content">
                                <a>
                                    <Book />
                                    <div class="meta">
                                        <span>Guides</span>
                                        <span>Learn everything fast</span>
                                    </div>
                                </a>
                                <a>
                                    <HelpCircle />
                                    <div class="meta">
                                        <span>FAQ</span>
                                        <span>Most asked questions</span>
                                    </div>
                                </a>
                                <a>
                                    <LifeBuoy />
                                    <div class="meta">
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
)


export const MainNavbar = () => {
    const [navScroll, setNavScroll] = useState();

    useLayoutEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 10) {
                setNavScroll((true));
            } else {
                setNavScroll((false))

            }


        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (<>
        <MobileNavbar navScroll={navScroll} />
        <BasicNavbar navScroll={navScroll} />
    </>);





}
