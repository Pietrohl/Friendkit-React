import {MoreVertical, Settings, Trash2, Tv, Plus} from 'react-feather';



const Stories = () => {

    return (
        <div class="card">
            <div class="card-heading is-bordered">
                <h4>Stories</h4>
                <div class="dropdown is-spaced is-neutral is-right dropdown-trigger">
                    <div>
                        <div class="button">
                            <MoreVertical/>
                        </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <Tv/>
                                    <div class="media-content">
                                        <h3>Browse stories</h3>
                                        <small>View all recent stories.</small>
                                    </div>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="media">
                                    <Settings/>
                                    <div class="media-content">
                                        <h3>Settings</h3>
                                        <small>Access widget settings.</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider"/>
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
                <div class="card-body no-padding">


                    {/* <!-- Story block --> */}
                    <div class="story-block">
                        <a id="add-story-button" href="#" class="add-story">
                            <Plus/>
                        </a>
                        <div class="story-meta">
                            <span>Add a new Story</span>
                            <span>Share an image, a video or some text</span>
                        </div>
                    </div>


                    {/* <!-- Story block --> */}
                    <div class="story-block">
                        <div class="img-wrapper">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
                        </div>
                        <div class="story-meta">
                            <span>Dan Walker</span>
                            <span>1 hour ago</span>
                        </div>
                    </div>


                    {/* <!-- Story block --> */}
                    <div class="story-block">
                        <div class="img-wrapper">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/bobby.jpg" data-user-popover="8" alt="" />
                        </div>
                        <div class="story-meta">
                            <span>Bobby Brown</span>
                            <span>3 days ago</span>
                        </div>
                    </div>


                    {/* <!-- Story block --> */}
        <div class="story-block">
                        <div class="img-wrapper">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" data-user-popover="6" alt="" />
                        </div>
                        <div class="story-meta">
                            <span>Elise Walker</span>
                            <span>Last week</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Stories;