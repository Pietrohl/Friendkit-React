import React from 'react';
import { Heart, Link2, MessageCircle } from "react-feather";

function PostFooter() {
    return (
        <>
            <div className="card-footer">
                {/* <!-- Followers --> */}
                <div className="likers-group">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" data-user-popover="7" alt="" />
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" data-user-popover="4" alt="" />
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" data-user-popover="9" alt="" />
                </div>
                <div className="likers-text">
                    <p>
                        <a href="/#">Milly</a>
                        <a href="/#">David</a>
                    </p>
                    <p>and 1 more liked this</p>
                </div>
                {/* <!-- Post statistics --> */}
                <div className="social-count">
                    <div className="likes-count">
                        <Heart />
                        <span>32</span>
                    </div>
                    <div className="shares-count">
                        <Link2 />
                        <span>4</span>
                    </div>
                    <div className="comments-count">
                        <MessageCircle />
                        <span>5</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostFooter;
