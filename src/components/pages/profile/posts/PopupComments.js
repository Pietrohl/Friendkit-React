import React from 'react';
import { Heart, Smile } from "react-feather";

function PopupComments() {
    return (
        <>
            <div className="comments-list has-slimscroll">
                <div className="media is-comment">
                    <figure className="media-left">
                        <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" data-user-popover="1" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="username">Dan Walker</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.</p>
                        <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>28m</span>
                            <div className="likes-count">
                                <Heart />
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="media is-comment is-nested">
                    <figure className="media-left">
                        <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" alt="" data-user-popover="4" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="username">David Kim</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>15m</span>
                            <div className="likes-count">
                                <Heart />
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="media is-comment">
                    <figure className="media-left">
                        <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/rolf.jpg" alt="" data-user-popover="17" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="username">Rolf Krupp</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros. Consectetur adipiscing elit. Proin ornare magna eros.</p>
                        <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>9h</span>
                            <div className="likes-count">
                                <Heart />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="media is-comment is-nested">
                    <figure className="media-left">
                        <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" data-user-popover="6" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="username">Elise Walker</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.</p>
                        <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>8h</span>
                            <div className="likes-count">
                                <Heart />
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="media is-comment is-nested">
                    <figure className="media-left">
                        <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/rolf.jpg" alt="" data-user-popover="17" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="username">Rolf Krupp</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.</p>
                        <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>7h</span>
                            <div className="likes-count">
                                <Heart />
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="media is-comment is-nested">
                    <figure className="media-left">
                        <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" data-user-popover="6" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="username">Elise Walker</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.</p>
                        <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>6h</span>
                            <div className="likes-count">
                                <Heart />
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="media is-comment">
                    <figure className="media-left">
                        <p className="image is-32x32">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/lana.jpeg" alt="" data-user-popover="14" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="username">Lana Henrikssen</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros. Consectetur adipiscing elit.</p>
                        <div className="comment-actions">
                            <a href="javascript:void(0);" className="is-inverted">Like</a>
                            <span>10h</span>
                            <div className="likes-count">
                                <Heart />
                                <span>7</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="comment-controls has-lightbox-emojis">
                <div className="controls-inner">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                    <div className="control">
                        <textarea className="textarea is-rounded" rows="1"></textarea>
                        <button className="emoji-button">
                            <Smile />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupComments;
