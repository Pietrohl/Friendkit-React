import React from 'react';
import {
    Camera,
    Plus,
    Minus,
    Bell,
    BellOff,
    MessageCircle,
    Mail,
} from 'react-feather';
function Avatar() {
    return (
        <>
            <div className="avatar" >
                <img id="user-avatar" className="avatar-image" src="https://via.placeholder.com/300x300" data-demo-src="../assets/img/avatars/jenna.png" alt="" />
                <div className="avatar-button" >
                    <Plus />
                </div>
                <div className="pop-button is-far-left has-tooltip modal-trigger" data-modal="change-profile-pic-modal" data-placement="right" data-title="Change profile picture">
                    <a href='/#' className="inner">
                        <Camera />
                    </a>
                </div>
                <div id="follow-pop" className="pop-button pop-shift is-left has-tooltip" data-placement="top" data-title="Subscription">
                    <a href='/#' className="inner">
                        <i className="inactive-icon"><Bell /></i>
                        <i className="active-icon"><BellOff /></i>
                    </a>
                </div>
                <div id="invite-pop" className="pop-button pop-shift is-center has-tooltip" data-placement="top" data-title="Relationship">
                    <a href="/#" className="inner">
                        <i className="inactive-icon"><Plus /></i>
                        <i className="active-icon"><Minus /></i>
                    </a>
                </div>
                <div id="chat-pop" className="pop-button is-right has-tooltip" data-placement="top" data-title="Chat">
                    <a href='/#' className="inner">
                        <MessageCircle />
                    </a>
                </div>
                <div className="pop-button is-far-right has-tooltip" data-placement="right" data-title="Send message">
                    <a href="messages-inbox.html" className="inner">
                        <Mail />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Avatar;
