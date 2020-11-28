import React from 'react';
import PostHeader from "./posts/PostHeader";
import PostBody from "./posts/PostBody";
import PostFooter from "./posts/PostFooter";

function ProfileTimeline() {
    return (
        <>
            <div className="profile-post">
                {/* <!-- Timeline --> */}
                <div className="time is-hidden-mobile">
                    <div className="img-container">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                    </div>
                </div>
                {/* <!-- Post --> */}
                <div className="card is-post">
                    {/* <!-- Main wrap --> */}
                    <div className="content-wrap">
                        <PostHeader />
                        <PostBody />
                        <PostFooter />
                    </div>
                </div>
            </div>
            <div className="profile-post">
                {/* <!-- Timeline --> */}
                <div className="time is-hidden-mobile">
                    <div className="img-container">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                    </div>
                </div>
                {/* <!-- Post --> */}
                <div className="card is-post">
                    {/* <!-- Main wrap --> */}
                    <div className="content-wrap">
                        <PostHeader />
                        <PostBody />
                        <PostFooter />
                    </div>
                </div>
            </div>
            <div className="profile-post">
                {/* <!-- Timeline --> */}
                <div className="time is-hidden-mobile">
                    <div className="img-container">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                    </div>
                </div>
                {/* <!-- Post --> */}
                <div className="card is-post">
                    {/* <!-- Main wrap --> */}
                    <div className="content-wrap">
                        <PostHeader />
                        <PostBody />
                        <PostFooter />
                    </div>
                </div>
            </div>
            <div className="profile-post">
                {/* <!-- Timeline --> */}
                <div className="time is-hidden-mobile">
                    <div className="img-container">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                    </div>
                </div>
                {/* <!-- Post --> */}
                <div className="card is-post">
                    {/* <!-- Main wrap --> */}
                    <div className="content-wrap">
                        <PostHeader />
                        <PostBody />
                        <PostFooter />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileTimeline;
