import React from 'react';
import {
    Search,
    UserPlus,
    UserMinus,
    Tag
} from 'react-feather';
function FirendRequests() {
    return (
        <div className="nav-drop is-active">
            <div className="inner">
                <div className="nav-drop-header">
                    <span>Friend requests</span>
                    <a href="/#">
                        <Search />
                    </a>
                </div>
                <div className="nav-drop-body is-friend-requests">
                    {/* <!-- Friend request --> */}
                    <div className="media">
                        <figure className="media-left">
                            <p className="image">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../assets/img/avatars/bobby.jpg" alt="" />
                            </p>
                        </figure>
                        <div className="media-content">
                            <a href="/#">Bobby Brown</a>
                            <span>Najeel verwick is a common friend</span>
                        </div>
                        <div className="media-right">
                            <button className="button icon-button is-solid grey-button raised">
                                <UserPlus />
                            </button>
                            <button className="button icon-button is-solid grey-button raised">
                                <UserMinus />
                            </button>
                        </div>
                    </div>
                    {/* <!-- Friend request --> */}
                    <div className="media">
                        <figure className="media-left">
                            <p className="image">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../assets/img/avatars/dan.jpg" alt="" />
                            </p>
                        </figure>
                        <div className="media-content">
                            <a href="/#">Dan Walker</a>
                            <span>You have 4 common friends</span>
                        </div>
                        <div className="media-right">
                            <button className="button icon-button is-solid grey-button raised">
                                <UserPlus />
                            </button>
                            <button className="button icon-button is-solid grey-button raised">
                                <UserMinus />
                            </button>
                        </div>
                    </div>
                    {/* <!-- Friend request --> */}
                    <div className="media">
                        <figure className="media-left">
                            <p className="image">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../assets/img/avatars/nelly.png" alt="" />
                            </p>
                        </figure>
                        <div className="media-content">
                            <span>You are now friends with <a href="/#">Nelly Schwartz</a>. Check her <a href="/#">profile</a>.</span>
                        </div>
                        <div className="media-right">
                            <div className="added-icon">
                                <Tag />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Friend request --> */}
                    <div className="media">
                        <figure className="media-left">
                            <p className="image">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../assets/img/avatars/milly.jpg" alt="" />
                            </p>
                        </figure>
                        <div className="media-content">
                            <a href="/#">Milly Augustine</a>
                            <span>You have 8 common friends</span>
                        </div>
                        <div className="media-right">
                            <button className="button icon-button is-solid grey-button raised">
                                <UserPlus />
                            </button>
                            <button className="button icon-button is-solid grey-button raised">
                                <UserMinus />
                            </button>
                        </div>
                    </div>
                    {/* <!-- Friend request --> */}
                    <div className="media">
                        <figure className="media-left">
                            <p className="image">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../assets/img/avatars/elise.jpg" alt="" />
                            </p>
                        </figure>
                        <div className="media-content">
                            <span>You are now friends with <a href="/#">Elise Walker</a>. Check her <a href="/#">profile</a>.</span>
                        </div>
                        <div className="media-right">
                            <div className="added-icon">
                                <Tag />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Friend request --> */}
                    <div className="media">
                        <figure className="media-left">
                            <p className="image">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../assets/img/avatars/edward.jpeg" alt="" />
                            </p>
                        </figure>
                        <div className="media-content">
                            <span>You are now friends with <a href="/#">Edward Mayers</a>. Check his <a href="/#">profile</a>.</span>
                        </div>
                        <div className="media-right">
                            <div className="added-icon">
                                <Tag />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-drop-footer">
                    <a href="/#">View All</a>
                </div>
            </div>
        </div>
    );
}

export default FirendRequests;
