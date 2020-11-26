import { useState } from "react";
import { Heart, Tag, UserMinus, UserPlus, Search } from "react-feather";


export const FriendRequestDropdown = () => {
    let [isActive, setisActive] = useState();


    return (
        <div class="navbar-item is-icon drop-trigger" onBlur={(() => setisActive(false))} >
            <a class="icon-link is-secondary is-friends" onClick={() => setisActive(!isActive)} href="javascript:void(0);">
                <Heart />
                <span class="indicator"></span>
            </a>

            <div class={`nav-drop ${isActive ? 'is-active' : ''}`}>
                <div class="inner">
                    <div class="nav-drop-header">
                        <span>Friend requests</span>
                        <a href="#">
                            <Search />
                        </a>
                    </div>
                    <div class="nav-drop-body is-friend-requests">
                        {/* Friend request */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/bobby.jpg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <a href="#">Bobby Brown</a>
                                <span>Najeel verwick is a common friend</span>
                            </div>
                            <div class="media-right">
                                <button class="button icon-button is-solid grey-button raised">
                                    <UserPlus />
                                </button>
                                <button class="button icon-button is-solid grey-button raised">
                                    <UserMinus />
                                </button>
                            </div>
                        </div>
                        {/* Friend request */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <a href="#">Dan Walker</a>
                                <span>You have 4 common friends</span>
                            </div>
                            <div class="media-right">
                                <button class="button icon-button is-solid grey-button raised">
                                    <UserPlus />
                                </button>
                                <button class="button icon-button is-solid grey-button raised">
                                    <UserMinus />
                                </button>
                            </div>
                        </div>
                        {/* Friend request */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <span>You are now friends with <a href="#">Nelly Schwartz</a>. Check her <a href="#">profile</a>.</span>
                            </div>
                            <div class="media-right">
                                <div class="added-icon">
                                    <Tag />
                                </div>
                            </div>
                        </div>
                        {/* Friend request */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <a href="#">Milly Augustine</a>
                                <span>You have 8 common friends</span>
                            </div>
                            <div class="media-right">
                                <button class="button icon-button is-solid grey-button raised">
                                    <UserPlus />
                                </button>
                                <button class="button icon-button is-solid grey-button raised">
                                    <UserMinus />
                                </button>
                            </div>
                        </div>
                        {/* Friend request */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <span>You are now friends with <a href="#">Elise Walker</a>. Check her <a href="#">profile</a>.</span>
                            </div>
                            <div class="media-right">
                                <div class="added-icon">
                                    <Tag />
                                </div>
                            </div>
                        </div>
                        {/* Friend request */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <span>You are now friends with <a href="#">Edward Mayers</a>. Check his <a href="#">profile</a>.</span>
                            </div>
                            <div class="media-right">
                                <div class="added-icon">
                                    <Tag />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-drop-footer">
                        <a href="#">View All</a>
                    </div>
                </div>
            </div>
        </div>
    )
}