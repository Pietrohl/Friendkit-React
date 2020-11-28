import { useEffect, useLayoutEffect, useState } from 'react';
import {
    Link2,
    MessageCircle,
    Heart
} from 'react-feather';
import { BrowserRouter } from 'react-router-dom';
import { ActionButton } from '../../components/ActionButtons/ActionButton';
import { ShareModal } from './modals/share';





const FeedPost = (props) => {
    const { shareModal, setShareModal, setInnerTextNode, setFancyVisible } = props;
    const innerText = () => (
        <p>Yesterday with
            <a href="#">@Karen Miller</a> and
            <a href="#">@Marvin Stemperd</a> at the
            <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally fantastic! People were really excited about this one!
        </p>
    );

    const handleShare = (prop) => {
        setInnerTextNode(innerText)
        setShareModal(prop)
    }


    useEffect(() => {

        setInnerTextNode(innerText)
    }, [shareModal])



    return (
        <div id="feed-post-1" class="card is-post">
            {/* <!-- Main wrap --> */}
            <div class="content-wrap">
                {/* <!-- Post header --> */}
                <div class="card-heading">
                    {/* <!-- User meta --> */}
                    <div class="user-block">
                        <div class="image">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                        </div>
                        <div class="user-info">
                            <a href="#">Dan Walker</a>
                            <span class="time">July 26 2018, 01:03pm</span>
                        </div>
                    </div>
                    {/* <!-- Right side dropdown --> */}

                </div>
                {/* <!-- /Post header --> */}

                {/* <!-- Post body --> */}
                <div class="card-body">
                    {/* <!-- Post body text --> */}
                    <div class="post-text" id="post-text">
                        {innerText()}
                    </div>
                    {/* <!-- Featured image --> */}
                    <div class="post-image">
                        <div onClick={()=> setFancyVisible(true)}  href="javascript:void(0);">
                            <img src="https://via.placeholder.com/1600x900" data-demo-src="assets/img/demo/unsplash/1.jpg" alt="" />
                        </div>
                        {/* <!-- Action buttons --> */}

                        <ActionButton shareModal={shareModal} setShareModal={handleShare} />


                    </div>
                </div>
                {/* <!-- /Post body --> */}

                {/* <!-- Post footer --> */}
                <div class="card-footer">
                    {/* <!-- Followers avatars --> */}
                    <div class="likers-group">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" data-user-popover="4" alt="" />
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" data-user-popover="5" alt="" />
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" data-user-popover="7" alt="" />
                    </div>
                    {/* <!-- Followers text --> */}
                    <div class="likers-text">
                        <p>
                            <a href="#">Milly</a>,
                        <a href="#">David</a>
                        </p>
                        <p>and 23 more liked this</p>
                    </div>
                    {/* <!-- Post statistics --> */}
                    <div class="social-count">
                        <div class="likes-count">
                            <Heart />
                            <span>27</span>
                        </div>
                        <div class="shares-count">
                            <Link2 />
                            <span>9</span>
                        </div>
                        <div class="comments-count">
                            <MessageCircle />
                            <span>3</span>
                        </div>
                    </div>
                </div>
                {/* <!-- /Post footer --> */}
            </div>

        </div>
    )


};

export default FeedPost;