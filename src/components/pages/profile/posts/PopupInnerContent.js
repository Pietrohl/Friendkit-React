import React from 'react';
import { Heart, MessageCircle, ThumbsUp, } from 'react-feather';
function PopupInnerContent() {
    return (
        <>
            <div className="inner-content">
                <div className="live-stats">
                    <div className="social-count">
                        <div className="likes-count">
                            <Heart />
                            <span>12</span>
                        </div>
                        <div className="comments-count">
                            <MessageCircle />
                            <span>8</span>
                        </div>
                    </div>
                    <div className="social-count ml-auto">
                        <div className="views-count">
                            <span>8</span>
                            <span className="views"><small>comments</small></span>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="action">
                        <ThumbsUp />
                        <span>Like</span>
                    </div>
                    <div className="action">
                        <MessageCircle />
                        <span>Comment</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupInnerContent;
