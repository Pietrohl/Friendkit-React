import React from 'react';
import { Link2, MessageCircle } from "react-feather";
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

function PostBody() {
    // $('[data-fancybox="comments"]').fancybox({
    //     keyboard: false,
    //     infobar: false,
    //     touch: {
    //         vertical: false
    //     },
    //     buttons: [
    //         "close",
    //         "thumbs",
    //         "share"
    //     ],
    //     animationEffect: "fade",
    //     transitionEffect: "fade",
    //     preventCaptionOverlap: false,
    //     idleTime: false,
    //     gutter: 0,
    // });
    const likeButtonHandler = function () {
        let element = document.querySelector('.like-button');
        if (element) {
            element.classList.toggle('is-active');
        }
    };
    return (
        <>
            <div className="card-body">
                {/* <!-- Post body text --> */}
                <div className="post-text">
                    <p>Today i visited this amazing little fashion store in Church street. Everything is handmade, from skirts
                    to bags. Their products really have an outstanding quality. If you don't know them already, well
                    it's time to make your move!
                    </p>
                </div>
                {/* <!-- Featured image --> */}
                <div className="post-image">
                    <ReactFancyBox
                        thumbnail="https://via.placeholder.com/1600x900"
                        image="https://via.placeholder.com/1600x900"
                    />
                    {/* <a data-fancybox data-lightbox-type="comments" data-thumb="assets/img/demo/unsplash/8.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="assets/img/demo/unsplash/8.jpg">
                        <img src="https://via.placeholder.com/1600x900" data-demo-src="assets/img/demo/unsplash/8.jpg" alt="" />
                    </a> */}
                    {/* <!-- Post actions --> */}
                    <div className="like-wrapper" onClick={likeButtonHandler}>
                        <span className="like-button">
                            <i className="mdi mdi-heart not-liked bouncy"></i>
                            <i className="mdi mdi-heart is-liked bouncy"></i>
                            <span className="like-overlay"></span>
                        </span>
                    </div>

                    <div className="fab-wrapper is-share">
                        <a href="/#" className="small-fab share-fab modal-trigger" data-modal="share-modal">
                            <Link2 />
                        </a>
                    </div>

                    <div className="fab-wrapper is-comment">
                        <a className="small-fab">
                            <MessageCircle />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostBody;
