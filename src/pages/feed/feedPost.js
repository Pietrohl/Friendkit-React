import {
    Link2,
    MessageCircle,
    Heart
} from 'react-feather';






const FeedPost = () => {
    // < !--POST #1 -- >
    return (
        <div id="feed-post-1" class="card is-post">
            {/* <!-- Main wrap --> */}
            <div class="content-wrap">
                {/* <!-- Post header --> */}
                <div class="card-heading">
                    {/* <!-- User meta --> */}
                    <div class="user-block">
                        <div class="image">
                            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
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
                    <div class="post-text">
                        <p>Yesterday with
                        <a href="#">@Karen Miller</a> and
                        <a href="#">@Marvin Stemperd</a> at the
                        <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally fantastic! People were really excited about this one!</p>
                    </div>
                    {/* <!-- Featured image --> */}
                    <div class="post-image">
                        <a data-fancybox="post1" data-lightbox-type="comments" data-thumb="assets/img/demo/unsplash/1.jpg" href="https://via.placeholder.com/1600x900" data-demo-href="assets/img/demo/unsplash/1.jpg">
                            <img src="https://via.placeholder.com/1600x900" data-demo-src="assets/img/demo/unsplash/1.jpg" alt="" />
                        </a>
                        {/* <!-- Action buttons --> */}



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
    );

};

export default FeedPost;