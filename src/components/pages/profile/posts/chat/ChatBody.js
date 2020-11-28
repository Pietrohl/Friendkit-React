import React from 'react';
import { Code, FileText, Monitor, Plus, Server } from "react-feather";

function ChatBody() {
    return (
        <>

            <div id="chat-body" className="chat-body is-opened">
                {/* <!-- Conversation with Dan --> */}
                <div id="dan-conversation" className="chat-body-inner has-slimscroll">
                    <div className="date-divider">
                        <hr className="date-divider-line" />
                        <span className="date-divider-text">Today</span>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                        <div className="message-block">
                            <span>8:03am</span>
                            <div className="message-text">Hi Jenna! I made a new design, and i wanted to show it to you.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                        <div className="message-block">
                            <span>8:03am</span>
                            <div className="message-text">It's quite clean and it's inspired from Bulkit.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>8:12am</span>
                            <div className="message-text">Oh really??! I want to see that.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                        <div className="message-block">
                            <span>8:13am</span>
                            <div className="message-text">FYI it was done in less than a day.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>8:17am</span>
                            <div className="message-text">Great to hear it. Just send me the PSD files so i can have a look at it.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>8:18am</span>
                            <div className="message-text">And if you have a prototype, you can also send me the link to it.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Conversation with Stella --> */}
                <div id="stella-conversation" className="chat-body-inner has-slimscroll is-hidden">
                    <div className="date-divider">
                        <hr className="date-divider-line" />
                        <span className="date-divider-text">Today</span>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>10:34am</span>
                            <div className="message-text">Hey Stella! Aren't we supposed to go the theatre after work?.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>10:37am</span>
                            <div className="message-text">Just remembered it.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                        <div className="message-block">
                            <span>11:22am</span>
                            <div className="message-text">Yeah you always do that, forget about everything.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Conversation with Daniel --> */}
                <div id="daniel-conversation" className="chat-body-inner has-slimscroll is-hidden">
                    <div className="date-divider">
                        <hr className="date-divider-line" />
                        <span className="date-divider-text">Yesterday</span>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>3:24pm</span>
                            <div className="message-text">Daniel, Amanda told me about your issue, how can I help?</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/daniel.jpg" alt="" />
                        <div className="message-block">
                            <span>3:42pm</span>
                            <div className="message-text">Hey Jenna, thanks for answering so quickly. Iam stuck, i need a car.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/daniel.jpg" alt="" />
                        <div className="message-block">
                            <span>3:43pm</span>
                            <div className="message-text">Can i borrow your car for a quick ride to San Fransisco? Iam running behind and
                                there' no train in sight.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Conversation with David --> */}
                <div id="david-conversation" className="chat-body-inner has-slimscroll is-hidden">
                    <div className="date-divider">
                        <hr className="date-divider-line" />
                        <span className="date-divider-text">Today</span>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>12:34pm</span>
                            <div className="message-text">Damn you! Why would you even implement this in the game?.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>12:32pm</span>
                            <div className="message-text">I just HATE aliens.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" alt="" />
                        <div className="message-block">
                            <span>13:09pm</span>
                            <div className="message-text">C'mon, you just gotta learn the tricks. You can't expect aliens to behave like
                                humans. I mean that's how the mechanics are.</div>
                        </div>
                    </div>
                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" alt="" />
                        <div className="message-block">
                            <span>13:11pm</span>
                            <div className="message-text">I checked the replay and for example, you always get supply blocked. That's not
                                the right thing to do.</div>
                        </div>
                    </div>
                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>13:12pm</span>
                            <div className="message-text">I know but i struggle when i have to decide what to make from larvas.</div>
                        </div>
                    </div>
                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" alt="" />
                        <div className="message-block">
                            <span>13:17pm</span>
                            <div className="message-text">Join me in game, i'll show you.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Conversation with Edward --> */}
                <div id="edward-conversation" className="chat-body-inner has-slimscroll">
                    <div className="date-divider">
                        <hr className="date-divider-line" />
                        <span className="date-divider-text">Monday</span>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                        <div className="message-block">
                            <span>4:55pm</span>
                            <div className="message-text">Hey Jenna, what's up?</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                        <div className="message-block">
                            <span>4:56pm</span>
                            <div className="message-text">Iam coming to LA tomorrow. Interested in having lunch?</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>5:21pm</span>
                            <div className="message-text">Hey mate, it's been a while. Sure I would love to.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                        <div className="message-block">
                            <span>5:27pm</span>
                            <div className="message-text">Ok. Let's say i pick you up at 12:30 at work, works?</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>5:43pm</span>
                            <div className="message-text">Yup, that works great.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>5:44pm</span>
                            <div className="message-text">And yeah, don't forget to bring some of my favourite cheese cake.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                        <div className="message-block">
                            <span>5:27pm</span>
                            <div className="message-text">No worries</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Conversation with Edward --> */}
                <div id="elise-conversation" className="chat-body-inner has-slimscroll is-hidden">
                    <div className="date-divider">
                        <hr className="date-divider-line" />
                        <span className="date-divider-text">September 28</span>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>11:53am</span>
                            <div className="message-text">Elise, i forgot my folder at your place yesterday.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>11:53am</span>
                            <div className="message-text">I need it badly, it's work stuff.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                        <div className="message-block">
                            <span>12:19pm</span>
                            <div className="message-text">Yeah i noticed. I'll drop it in half an hour at your office.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Conversation with Nelly --> */}
                <div id="nelly-conversation" className="chat-body-inner has-slimscroll is-hidden">
                    <div className="date-divider">
                        <hr className="date-divider-line" />
                        <span className="date-divider-text">September 17</span>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>8:22pm</span>
                            <div className="message-text">So you watched the movie?</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>8:22pm</span>
                            <div className="message-text">Was it scary?</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt="" />
                        <div className="message-block">
                            <span>9:03pm</span>
                            <div className="message-text">It was so frightening, i felt my heart was about to blow inside my chest.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Conversation with Milly --> */}
                <div id="milly-conversation" className="chat-body-inner has-slimscroll">
                    <div className="date-divider">
                        <hr className="date-divider-line" />
                        <span className="date-divider-text">Today</span>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                        <div className="message-block">
                            <span>2:01pm</span>
                            <div className="message-text">Hello Jenna, did you read my proposal?</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                        <div className="message-block">
                            <span>2:01pm</span>
                            <div className="message-text">Didn't hear from you since i sent it.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>2:02pm</span>
                            <div className="message-text">Hello Milly, Iam really sorry, Iam so busy recently, but i had the time to read
                                it.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                        <div className="message-block">
                            <span>2:04pm</span>
                            <div className="message-text">And what did you think about it?</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>2:05pm</span>
                            <div className="message-text">Actually it's quite good, there might be some small changes but overall it's
                                great.</div>
                        </div>
                    </div>

                    <div className="chat-message is-sent">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                        <div className="message-block">
                            <span>2:07pm</span>
                            <div className="message-text">I think that i can give it to my boss at this stage.</div>
                        </div>
                    </div>

                    <div className="chat-message is-received">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                        <div className="message-block">
                            <span>2:09pm</span>
                            <div className="message-text">Crossing fingers then</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Compose message area --> */}
                <div className="chat-action">
                    <div className="chat-action-inner">
                        <div className="control">
                            <textarea className="textarea comment-textarea" rows="1"></textarea>
                            <div className="dropdown compose-dropdown is-spaced is-accent is-up dropdown-trigger">
                                <div>
                                    <div className="add-button">
                                        <div className="button-inner">
                                            <Plus />
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <Code />
                                                <div className="media-content">
                                                    <h3>Code snippet</h3>
                                                    <small>Add and paste a code snippet.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <FileText />
                                                <div className="media-content">
                                                    <h3>Note</h3>
                                                    <small>Add and paste a note.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <Server />
                                                <div className="media-content">
                                                    <h3>Remote file</h3>
                                                    <small>Add a file from a remote drive.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <Monitor />
                                                <div className="media-content">
                                                    <h3>Local file</h3>
                                                    <small>Add a file from your computer.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ChatBody;
