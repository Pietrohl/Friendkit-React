import videoCall from '../../../assets/img/illustrations/cards/videocall.svg'
import videoTrip from "../../../assets/img/illustrations/cards/videotrip.svg"
import { useEffect, useState } from "react"
import { Activity, Check, Eye, Globe, Heart, Link2, Lock, MessageCircle, MoreVertical, Smile, ThumbsUp, Triangle, User, X } from "react-feather"

export const VideoHelpModal = (props) => {
    const { isActive, closeHelp } = props;
    const [panel, setPanel] = useState(0);

    return (
        <div id="videos-help-modal" class={`modal videos-modal is-xsmall  has-light-bg ${isActive ? 'is-active' : ''}`}>
            <div class="modal-background"></div>
            <div class="modal-content">

                <div class="card">
                    <div class="card-heading">
                        <h3>Add Photos</h3>

                        {/* Close X button */}
                        <div class="close-wrap" onClick={closeHelp}>
                            <span class="close-modal">
                                <X />
                            </span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class={`content-block ${panel==0? 'is-active':'is-hidden'}`}>
                            <img src={videoTrip} alt="" />
                            <div class="help-text center">
                                <h3>Share live videos</h3>
                                <p>Lorem ipsum sit dolor amet is a dummy text used by the typography industry and the web industry.</p>
                            </div>
                        </div>

                        <div class={`content-block ${panel==1? 'is-active':'is-hidden'}`}>
                            <img src={videoCall} alt="" />
                            <div class="help-text">
                                <h3>To build your audience</h3>
                                <p>Lorem ipsum sit dolor amet is a dummy text used by the typography industry and the web industry.</p>
                            </div>
                        </div>

                        <div class="slide-dots">
                            <div class="dot is-active"></div>
                            <div class="dot"></div>
                        </div>
                        <div class="action">
                            <button type="button" class="button is-solid accent-button next-modal raised" onClick={()=> setPanel(1)} data-modal="videos-modal">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export const VideoModal = (props) => {
    const [help, setHelp] = useState(false);
    const { isActive, setIsActive } = props;

    const closeHelp = () => {
        setHelp(true);
        setIsActive(false);
    }


    return (
        <>

            <VideoHelpModal isActive={isActive} closeHelp={closeHelp} />
            <div id="videos-modal" class={`modal videos-modal is-xxl has-light-bg ${help ? 'is-active' : ''}`}>
                <div class="modal-background"></div>
                <div class="modal-content">

                    <div class="card">
                        <div class="card-heading">
                            <h3>Go live</h3>
                            <div id="stop-stream" class="button is-solid accent-button is-hidden" onclick="stopWebcam();">
                                <i class="mdi mdi-video-off"></i>
                        Stop stream
                    </div>
                            <div id="start-stream" class="button is-solid accent-button" onclick="startWebcam();">
                                <i class="mdi mdi-video"></i>
                        Start stream
                    </div>


                            {/* Close X button */}
                            <div class="close-wrap" onClick={() => setHelp(false)}>
                                <span class="close-modal">
                                    <i><X/></i>
                                </span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="inner">
                                <div class="left-section">
                                    <div class="video-wrapper">
                                        <div class="video-wrap">
                                            <div id="live-indicator" class="live is-vhidden">Live</div>
                                            <video id="video" width="400" height="240" controls autoplay></video>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-section">
                                    <div class="header">
                                        <img src="https://via.placeholder.com/300x300"
                                            data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                        <div class="user-meta">
                                            <span>Jenna Davis <small>is live</small></span>
                                            <span><small>right now</small></span>
                                        </div>
                                        <button type="button" class="button">Follow</button>
                                        <div class="dropdown is-spaced is-right dropdown-trigger">
                                            <div>
                                                <div class="button">
                                                    <i><MoreVertical/></i>
                                                </div>
                                            </div>
                                            <div class="dropdown-menu" role="menu">
                                                <div class="dropdown-content">
                                                    <div class="dropdown-item is-title">
                                                        Who can see this ?
                                            </div>
                                                    <a href="#" class="dropdown-item">
                                                        <div class="media">
                                                            <i><Globe/></i>
                                                            <div class="media-content">
                                                                <h3>Public</h3>
                                                                <small>Anyone can see this publication.</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a class="dropdown-item">
                                                        <div class="media">
                                                            <i><User/></i>
                                                            <div class="media-content">
                                                                <h3>Friends</h3>
                                                                <small>only friends can see this publication.</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a class="dropdown-item">
                                                        <div class="media">
                                                            <i><User/></i>
                                                            <div class="media-content">
                                                                <h3>Specific friends</h3>
                                                                <small>Don't show it to some friends.</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <hr class="dropdown-divider" />
                                                    <a class="dropdown-item">
                                                        <div class="media">
                                                            <i><Lock/></i>
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
                                        <div class="control">
                                            <input type="text" class="input is-sm is-fade" placeholder="What is this live about?" />
                                            <div class="icon">
                                                <i><Activity/></i>
                                            </div>
                                        </div>
                                        <div class="live-stats">
                                            <div class="social-count">
                                                <div class="likes-count">
                                                    <i><Heart/></i>
                                                    <span>0</span>
                                                </div>
                                                <div class="shares-count">
                                                    <i ><Link2/></i>
                                                    <span>0</span>
                                                </div>
                                                <div class="comments-count">
                                                    <i><MessageCircle/></i>
                                                    <span>0</span>
                                                </div>
                                            </div>
                                            <div class="social-count ml-auto">
                                                <div class="views-count">
                                                    <i><Eye/></i>
                                                    <span>0</span>
                                                    <span class="views"><small>views</small></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="actions">
                                            <div class="action">
                                                <i><ThumbsUp/></i>
                                                <span>Like</span>
                                            </div>
                                            <div class="action">
                                                <i><MessageCircle/></i>
                                                <span>Comment</span>
                                            </div>
                                            <div class="action">
                                                <i ><Link2/></i>
                                                <span>Share</span>
                                            </div>
                                            <div class="dropdown is-spaced is-right dropdown-trigger">
                                                <div>
                                                    <div class="avatar-button">
                                                        <img src="https://via.placeholder.com/300x300"
                                                            data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                                        <i><Triangle/></i>
                                                    </div>
                                                </div>
                                                <div class="dropdown-menu has-margin" role="menu">
                                                    <div class="dropdown-content">
                                                        <a href="#" class="dropdown-item is-selected">
                                                            <div class="media">
                                                                <img src="https://via.placeholder.com/300x300"
                                                                    data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                                                <div class="media-content">
                                                                    <h3>Jenna Davis</h3>
                                                                    <small>Interact as Jenna Davis.</small>
                                                                </div>
                                                                <div class="checkmark">
                                                                    <i><Check/></i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <hr class="dropdown-divider" />
                                                        <a href="#" class="dropdown-item">
                                                            <div class="media">
                                                                <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/avatars/hanzo.svg" alt="" />
                                                                <div class="media-content">
                                                                    <h3>Css Ninja</h3>
                                                                    <small>Interact as Css Ninja.</small>
                                                                </div>
                                                                <div class="checkmark">
                                                                    <i><Check/></i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tabs-wrapper">
                                        <div class="tabs is-fullwidth">
                                            <ul>
                                                <li class="is-active">
                                                    <a>Comments</a>
                                                </li>
                                                <li>
                                                    <a>Upcoming</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content has-slimscroll">
                                            <div class="media is-comment">
                                                <figure class="media-left">
                                                    <p class="image is-32x32">
                                                        <img src="https://via.placeholder.com/300x300"
                                                            data-demo-src="assets/img/avatars/dan.jpg" alt=""
                                                            data-user-popover="1" />
                                                    </p>
                                                </figure>
                                                <div class="media-content">
                                                    <div class="username">Dan Walker</div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                                                eros.</p>
                                                    <div class="comment-actions">
                                                        <a href="javascript:void(0);" class="is-inverted">Like</a>
                                                        <span>3h</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="media is-comment">
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
                                                        <span>4h</span>
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
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                                                eros. Consectetur adipiscing elit. Proin ornare magna eros.</p>
                                                    <div class="comment-actions">
                                                        <a href="javascript:void(0);" class="is-inverted">Like</a>
                                                        <span>4h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="comment-controls">
                                        <div class="controls-inner">
                                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                            <div class="control">
                                                <textarea class="textarea comment-textarea is-rounded" rows="1"></textarea>
                                                <button class="emoji-button">
                                                    <i><Smile/></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

