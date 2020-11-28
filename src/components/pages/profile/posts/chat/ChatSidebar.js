import React from 'react';
import { User } from 'react-feather';
function ChatSidebar() {
    return (
        <>
            <div id="chat-sidebar" className="users-sidebar">
                {/* <!-- Header --> */}
                <div className="header-item">
                    <img src="../../../../../assets/img/logo/friendkit-bold.svg" alt="" />
                </div>
                {/* <!-- User list --> */}
                <div className="conversations-list has-slimscroll-xs">
                    {/* <!-- User --> */}
                    <div className="user-item is-active" data-chat-user="dan" data-full-name="Dan Walker" data-status="Online">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                            <div className="user-status is-online"></div>
                        </div>
                    </div>
                    {/* <!-- User --> */}
                    <div className="user-item" data-chat-user="stella" data-full-name="Stella Bergmann" data-status="Busy">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                            <div className="user-status is-busy"></div>
                        </div>
                    </div>
                    {/* <!-- User --> */}
                    <div className="user-item" data-chat-user="daniel" data-full-name="Daniel Wellington" data-status="Away">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/daniel.jpg" alt="" />
                            <div className="user-status is-away"></div>
                        </div>
                    </div>
                    {/* <!-- User --> */}
                    <div className="user-item" data-chat-user="david" data-full-name="David Kim" data-status="Busy">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" alt="" />
                            <div className="user-status is-busy"></div>
                        </div>
                    </div>
                    {/* <!-- User --> */}
                    <div className="user-item" data-chat-user="edward" data-full-name="Edward Mayers" data-status="Online">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                            <div className="user-status is-online"></div>
                        </div>
                    </div>
                    {/* <!-- User --> */}
                    <div className="user-item" data-chat-user="elise" data-full-name="Elise Walker" data-status="Away">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                            <div className="user-status is-away"></div>
                        </div>
                    </div>
                    {/* <!-- User --> */}
                    <div className="user-item" data-chat-user="nelly" data-full-name="Nelly Schwartz" data-status="Busy">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt="" />
                            <div className="user-status is-busy"></div>
                        </div>
                    </div>
                    {/* <!-- User --> */}
                    <div className="user-item" data-chat-user="milly" data-full-name="Milly Augustine" data-status="Busy">
                        <div className="avatar-container">
                            <img className="user-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                            <div className="user-status is-busy"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Add Conversation --> */}
                <div className="footer-item">
                    <div className="add-button modal-trigger" data-modal="add-conversation-modal"><User /></div>
                </div>
            </div>
        </>
    );
}

export default ChatSidebar;
