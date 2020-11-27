import { useEffect, useLayoutEffect, useState } from 'react';
import {
    Link2,
    MessageCircle,
    Heart,
    Play
} from 'react-feather';
import { ActionButton } from '../../components/ActionButtons/ActionButton';
import { ShareModal } from './modals/share';
import play from '../../assets/img/icons/video/play.svg'





const FeedPost2 = (props) => {
    const { shareModal, setShareModal, setInnerTextNode } = props;
    const innerText = () => (
        <p>You all know how i love bootstrap, but i didn't have time to dig deeper into it. Therefore i found this very
        interesting video i wanted to share with you all.
            <a href="#">#bootsrap #webdesign</a>
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
        <div className="card is-post">
            {/* <!-- Main wrap --> */}
            <div className="content-wrap">
                {/* <!-- Post header --> */}
                <div className="card-heading">
                    {/* <!-- User meta --> */}
                    <div className="user-block">
                        <div className="image">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" data-user-popover="5" alt="" />
                        </div>
                        <div className="user-info">
                            <a href="#">Edward Mayers</a>
                            <span className="time">July 26 2018, 11:14am</span>
                        </div>
                    </div>
                    {/* <!-- Right side dropdown --> */}
                </div>
                {/* <!-- /Post header --> */}

                {/* <!-- Post body --> */}
                <div className="card-body">
                    {/* <!-- Post body text --> */}
                    <div className="post-text">
                        {innerText()}
                    </div>
                    {/* <!-- Featured youtube video --> */}
                    <div className="post-link is-video">
                        {/* <!-- Link image --> */}
                        <div className="link-image">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/demo/video/bootstrap.jpg" alt="" />
                            <div className="video-overlay"></div>
                            <a className="video-button" data-fancybox href="https://www.youtube.com/watch?v=N8GksI_-iIM">
                                <img src={play} alt="" />
                            </a>
                        </div>
                        {/* <!-- Link content --> */}
                        <div className="link-content">
                            <h4>
                                <a href="#">What's new in Bootstrap 4 ?</a>
                            </h4>
                            <p>Before I create the new Bootstrap 4 crash course I want to go over some of the changes from Bootstrap
                        3.</p>
                            <small>Youtube.com</small>
                        </div>
                        {/* <!-- Post actions --> */}

                        <ActionButton shareModal={shareModal} setShareModal={setShareModal} />

                    </div>
                </div>
                {/* <!-- /Post body --> */}

                {/* <!-- Post footer --> */}
                <div className="card-footer">
                    {/* <!-- Followers --> */}
                    <div className="likers-group">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/daniel.jpg" data-user-popover="3" alt="" />
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" data-user-popover="6" alt="" />
                    </div>
                    <div className="likers-text">
                        <p>
                            <a href="#">Daniel</a> and
                    <a href="#">Elise</a>
                        </p>
                        <p>liked this</p>
                    </div>
                    {/* <!-- Post statistics --> */}
                    <div className="social-count">
                        <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>2</span>
                        </div>
                        <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>0</span>
                        </div>
                        <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>2</span>
                        </div>
                    </div>
                </div>
                {/* <!-- /Post footer --> */}
            </div>
            
        </div>

    )


};

export default FeedPost2;