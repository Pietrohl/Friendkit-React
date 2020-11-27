import { Share2, X } from "react-feather";

export default function Fancybox(props) {
const {setFancyVisible} = props;

    return (
        <div className='view-wrapper'>
            <div class="fancybox-container fancybox-custom-layout fancybox-show-toolbar fancybox-show-caption fancybox-is-open fancybox-is-zoomable fancybox-can-zoomIn" role="dialog" tabindex="-1" id="fancybox-container-16" style={{ height: '100vh', width: '100vw', transitionDuration: '366ms', position: 'absolute', top: '0' }}>
                <div class="fancybox-bg" style={{ width: '100%', height: '100%' }}>
                </div>
                <div class="fancybox-inner" style={{ top: '0', width: '100%', height: '100%', bottom: '0', position: 'absolute', left: '0' }}>

                    <div class="fancybox-toolbar" style={{ position: 'absolute', marginLeft: '2vw', textAlign: 'center' }}>
                        <div data-fancybox-close="" onClick={()=> setFancyVisible(false)} class="fancybox-button fancybox-button--close" title="Close" style={{marginBottom: '0.8vw', marginTop: '0.8vw'}}>
                            <X />
                        </div>
                     
                        <div data-fancybox-share="" class="fancybox-button fancybox-button--share" title="Share">
                        <Share2 />
                        </div>
                    </div>

                    <div class="fancybox-stage" style={{ height: '100vh', position: 'absolute', left: '0' }}>
                        <div class="fancybox-slide fancybox-slide--image fancybox-slide--current fancybox-slide--complete" style={{ height: '100%' }}>
                            <div class="fancybox-content" style={{ marginTop: '8vw', marginBottom: '8vw' }} >
                                <img class="fancybox-image" src="https://via.placeholder.com/1600x900" style={{ display: 'block', marginTop: 'auto', marginBottom: 'auto' }} />
                            </div>
                        </div>
                    </div>


                    {/* Caption */}
                    <div class="fancybox-caption" style={{ position: 'absolute' }}>
                        <div class="fancybox-caption__body" style={{ position: 'absolute' }}>
                            <div class="header">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                                <div class="user-meta">
                                    <span>Dan Walker</span>
                                    <span><small>2 hours ago</small></span>
                                </div>
                                <button type="button" class="button">Follow</button>
                                <div class="dropdown is-spaced is-right dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <div class="dropdown-item is-title has-text-left">
                                                Who can see this ?
                            </div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                    <div class="media-content">
                                                        <h3>Public</h3>
                                                        <small>Anyone can see this publication.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                    <div class="media-content">
                                                        <h3>Friends</h3>
                                                        <small>only friends can see this publication.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                    <div class="media-content">
                                                        <h3>Specific friends</h3>
                                                        <small>Don't show it to some friends.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <hr class="dropdown-divider" />
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                                    <div class="media-content">
                                                        <h3>Only me</h3>
                                                        <small>Only me can see this publication.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="inner-content">
                                <div class="live-stats">
                                    <div class="social-count">
                                        <div class="likes-count">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                            <span>12</span>
                                        </div>
                                        <div class="comments-count">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                            <span>8</span>
                                        </div>
                                    </div>
                                    <div class="social-count ml-auto">
                                        <div class="views-count">
                                            <span>8</span>
                                            <span class="views"><small>comments</small></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="actions">
                                    <div class="action">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                        <span>Like</span>
                                    </div>
                                    <div class="action">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        <span>Comment</span>
                                    </div>
                                </div>
                            </div>

                            <div class="comments-list has-slimscroll">
                                <div class="media is-comment">
                                    <figure class="media-left">
                                        <p class="image is-32x32">
                                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" data-user-popover="1" />
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="username">Dan Walker</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.</p>
                                        <div class="comment-actions">
                                            <a href="javascript:void(0);" class="is-inverted">Like</a>
                                            <span>28m</span>
                                            <div class="likes-count">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                <span>2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="media is-comment is-nested">
                                    <figure class="media-left">
                                        <p class="image is-32x32">
                                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" alt="" data-user-popover="4" />
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="username">David Kim</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                        <div class="comment-actions">
                                            <a href="javascript:void(0);" class="is-inverted">Like</a>
                                            <span>15m</span>
                                            <div class="likes-count">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="media is-comment">
                                    <figure class="media-left">
                                        <p class="image is-32x32">
                                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/rolf.jpg" alt="" data-user-popover="17" />
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="username">Rolf Krupp</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros. Consectetur adipiscing elit. Proin ornare magna eros.</p>
                                        <div class="comment-actions">
                                            <a href="javascript:void(0);" class="is-inverted">Like</a>
                                            <span>9h</span>
                                            <div class="likes-count">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="media is-comment is-nested">
                                    <figure class="media-left">
                                        <p class="image is-32x32">
                                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" data-user-popover="6" />
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="username">Elise Walker</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.</p>
                                        <div class="comment-actions">
                                            <a href="javascript:void(0);" class="is-inverted">Like</a>
                                            <span>8h</span>
                                            <div class="likes-count">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                <span>4</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="media is-comment is-nested">
                                    <figure class="media-left">
                                        <p class="image is-32x32">
                                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/rolf.jpg" alt="" data-user-popover="17" />
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="username">Rolf Krupp</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.</p>
                                        <div class="comment-actions">
                                            <a href="javascript:void(0);" class="is-inverted">Like</a>
                                            <span>7h</span>
                                            <div class="likes-count">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                <span>2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="media is-comment is-nested">
                                    <figure class="media-left">
                                        <p class="image is-32x32">
                                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" data-user-popover="6" />
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="username">Elise Walker</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.</p>
                                        <div class="comment-actions">
                                            <a href="javascript:void(0);" class="is-inverted">Like</a>
                                            <span>6h</span>
                                            <div class="likes-count">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                <span>4</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="media is-comment">
                                    <figure class="media-left">
                                        <p class="image is-32x32">
                                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/lana.jpeg" alt="" data-user-popover="14" />
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="username">Lana Henrikssen</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros. Consectetur adipiscing elit.</p>
                                        <div class="comment-actions">
                                            <a href="javascript:void(0);" class="is-inverted">Like</a>
                                            <span>10h</span>
                                            <div class="likes-count">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                <span>7</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="comment-controls has-lightbox-emojis">
                                <div class="controls-inner" id="lightbox-post-comment-wrapper-1">
                                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                    <div class="control">
                                        <textarea class="textarea is-rounded" rows="1" id="lightbox-post-comment-textarea-1"></textarea>
                                        <button class="emoji-button" id="lightbox-post-comment-button-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div></div></div></div>
        </div>
    )
}