import React from 'react';
import { ChevronLeft, ChevronRight, X, Plus } from "react-feather";
import Calendar from './Calendar';
function CalendarWidget() {
    return (
        <div className="schedule">
            <div className="schedule-day-container hidden">
                <div className="day-header day-header--large">
                    <div className="day-header-bg"></div>
                    <div className="day-header-close">
                        <X />
                    </div>
                    <div className="day-header-content">
                        <div className="day-header-title">
                            <div className="day-header-title-day">24</div>
                            <div className="day-header-title-month">October</div>
                        </div>
                        <div className="day-header-event">Workout Session</div>
                    </div>
                </div>
                <div className="day-content has-slimscroll">

                    {/* <!-- Event 1 details --> */}

                    <div id="event-1" className="event-details-wrap">
                        <div className="meta-block">
                            <i className="mdi mdi-lock"></i>
                            <div className="meta">
                                <span>Private</span>
                                <span>This is a private event</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-map-marker"></i>
                            <div className="meta">
                                <span>Where</span>
                                <span>@ Mom and Dad's house</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-progress-clock"></i>
                            <div className="meta">
                                <span>When</span>
                                <span>02:00pm - 03:30pm</span>
                            </div>
                        </div>
                        <div className="participants-wrap">
                            <label>4 Participants</label>
                            <div className="participants">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/jenna.png" alt="" data-user-popover="0" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/nelly.png" alt="" data-user-popover="9" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/stella.jpg" alt="" data-user-popover="2" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/milly.jpg" alt="" data-user-popover="7" />
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr />
                        <div className="button-wrap">
                            <a href="/#" className="button is-bold">Participating</a>
                            <a href="/#" className="button is-bold">Details</a>
                        </div>
                    </div>
                    {/* <!-- Event 2 details --> */}
                    <div id="event-2" className="event-details-wrap">
                        <div className="meta-block">
                            <i className="mdi mdi-lock"></i>
                            <div className="meta">
                                <span>Private</span>
                                <span>This is a private event</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-map-marker"></i>
                            <div className="meta">
                                <span>Where</span>
                                <span>@ <a href="/#" className="is-inverted">Wayne's Coffeeshop</a>, LA</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-progress-clock"></i>
                            <div className="meta">
                                <span>When</span>
                                <span>11:00am - 12:30pm</span>
                            </div>
                        </div>
                        <div className="participants-wrap">
                            <label>3 Participants</label>
                            <div className="participants">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/jenna.png" alt="" data-user-popover="0" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/edward.jpeg" alt="" data-user-popover="4" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/rolf.jpg" alt="" data-user-popover="13" />
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr />
                        <div className="button-wrap">
                            <a href="/#" className="button is-bold">Participating</a>
                            <a href="/#" className="button is-bold">Details</a>
                        </div>
                    </div>
                    {/* <!-- Event 3 details --> */}
                    <div id="event-3" className="event-details-wrap">
                        <div className="meta-block">
                            <i className="mdi mdi-earth"></i>
                            <div className="meta">
                                <span>Public</span>
                                <span>This is a public event</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-map-marker"></i>
                            <div className="meta">
                                <span>Where</span>
                                <span>@ Frank's appartment</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-progress-clock"></i>
                            <div className="meta">
                                <span>When</span>
                                <span>08:00pm - 02:00am</span>
                            </div>
                        </div>
                        <div className="participants-wrap">
                            <label>29 Participants</label>
                            <div className="participants">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/jenna.png" alt="" data-user-popover="0" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/elise.jpg" alt="" data-user-popover="6" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/daniel.jpg" alt="" data-user-popover="3" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/rolf.jpg" alt="" data-user-popover="13" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/milly.jpg" alt="" data-user-popover="7" />
                                <div className="is-more">+24</div>
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr />
                        <div className="button-wrap">
                            <a href="/#" className="button is-bold">Participating</a>
                            <a href="/#" className="button is-bold">Details</a>
                        </div>
                    </div>
                    {/* <!-- Event 4 details --> */}
                    <div id="event-4" className="event-details-wrap">
                        <div className="meta-block">
                            <i className="mdi mdi-lock"></i>
                            <div className="meta">
                                <span>Private</span>
                                <span>This is a private event</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-map-marker"></i>
                            <div className="meta">
                                <span>Where</span>
                                <span>@ <a href="/#" className="is-inverted">Gold Gym</a>, LA</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-progress-clock"></i>
                            <div className="meta">
                                <span>When</span>
                                <span>05:00pm - 07:00pm</span>
                            </div>
                        </div>
                        <div className="participants-wrap">
                            <label>2 Participants</label>
                            <div className="participants">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/jenna.png" alt="" data-user-popover="0" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/lana.jpeg" alt="" data-user-popover="10" />
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr />
                        <div className="button-wrap">
                            <a href="/#" className="button is-bold">Participating</a>
                            <a href="/#" className="button is-bold">Details</a>
                        </div>
                    </div>
                    {/* <!-- Event 5 details --> */}
                    <div id="event-5" className="event-details-wrap">
                        <div className="meta-block">
                            <i className="mdi mdi-lock"></i>
                            <div className="meta">
                                <span>Private</span>
                                <span>This is a private event</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-map-marker"></i>
                            <div className="meta">
                                <span>Where</span>
                                <span>@ <a href="/#" className="is-inverted">Massive Dynamics Office</a>, LA</span>
                            </div>
                        </div>
                        <div className="meta-block">
                            <i className="mdi mdi-progress-clock"></i>
                            <div className="meta">
                                <span>When</span>
                                <span>08:30am - 10:00am</span>
                            </div>
                        </div>
                        <div className="participants-wrap">
                            <label>29 Participants</label>
                            <div className="participants">
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/jenna.png" alt="" data-user-popover="0" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/dan.jpg" alt="" data-user-popover="1" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/edward.jpeg" alt="" data-user-popover="5" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/mike.jpg" alt="" data-user-popover="12" />
                                <img src="https://via.placeholder.com/300x300" data-demo-src="../../../../assets/img/avatars/gaelle.jpeg" alt="" data-user-popover="11" />
                                <div className="is-more">+4</div>
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr />
                        <div className="button-wrap">
                            <a href="/#" className="button is-bold">Participating</a>
                            <a href="/#" className="button is-bold">Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="schedule-header">
                <div className="nav-icon">
                    <ChevronLeft />
                </div>
                <div className="month">October</div>
                <div className="nav-icon">
                    <ChevronRight />
                </div>
            </div>
            <Calendar />
            <div className="schedule-divider"></div>
            <div className="schedule-events">
                <div className="schedule-events-title">
                    Upcoming events
                </div>
                <div className="schedule-event">
                    <div className="event-date green">2</div>
                    <div className="event-title">
                        <span>Eat at mom and dad's</span>
                        <span>07:30pm | Home</span>
                    </div>
                </div>
                <div className="schedule-event">
                    <div className="event-date purple">7</div>
                    <div className="event-title">
                        <span>Meet customer in LA</span>
                        <span>11:00am | St Luc Café</span>
                    </div>
                </div>
                <div className="schedule-event">
                    <div className="event-date green">22</div>
                    <div className="event-title">
                        <span>Frank's birthday</span>
                        <span>03:00pm | Frank's home</span>
                    </div>
                </div>
                <div className="schedule-event">
                    <div className="event-date primary">24</div>
                    <div className="event-title">
                        <span>Workout session</span>
                        <span>07:00am | Gold Gym</span>
                    </div>
                </div>
                <div className="schedule-event">
                    <div className="event-date purple">26</div>
                    <div className="event-title">
                        <span>Project review</span>
                        <span>08:00am | Office</span>
                    </div>
                </div>
                <div className="button-wrap">
                    <a href="/#" className="button is-fullwidth has-icon"><Plus />New Event</a>
                </div>
            </div>
        </div>
    );
}

export default CalendarWidget;
