import backgroundSvg from '../../../assets/img/illustrations/cards/job-bg.svg'

import {
    MoreVertical,
    MessageCircle,
    Trash2,
    Briefcase,
    Clock
} from 'react-feather';

const myStyle = {
    backgroundImage: "url(" + backgroundSvg + ")"
}


export const NewJob = () => (
    <div class="card is-new-job-card has-background-image" style={myStyle}>
            <div class="card-heading">
            <Briefcase/>
            <div class="dropdown is-spaced is-right dropdown-trigger is-light">
                <div>
                    <div class="button">
                        <MoreVertical/>
                    </div>
                </div>
                <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                            <div class="media">
                                <Clock/>
                                <div class="media-content">
                                    <h3>Remind me</h3>
                                    <small>Remind me of this later today.</small>
                                </div>
                            </div>
                        </a>
                        <a class="dropdown-item">
                            <div class="media">
                                <MessageCircle/>
                                <div class="media-content">
                                    <h3>Message</h3>
                                    <small>Send an automatic congratz message.</small>
                                </div>
                            </div>
                        </a>
                        <hr class="dropdown-divider" />
                        <a href="#" class="dropdown-item">
                            <div class="media">
                                <Trash2/>
                                <div class="media-content">
                                    <h3>Remove</h3>
                                    <small>Removes this widget from your feed.</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div>
                <div class="job-avatar">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt="" />
                </div>
                <div class="job-content">
                    <h4>Nelly has a new job!</h4>
                    <p>Send her message congratulating her for getting this job.</p>
                    <button type="button" class="button light-button">Write Message</button>
                </div>
            </div>
        </div>
    </div>
)