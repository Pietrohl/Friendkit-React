import React from 'react';
import { FakeAd } from '../../components/widget/fake_ad';
import { RecomendedPages } from '../../components/widget/recommended_pages/index';
import { WeatherWidget } from '../../components/widget/weather_widget/index';
import { LatestActivity } from '../../components/widget/latest_activity/index';
import { Birthday } from '../../components/widget/birthday/index';
import Stories from '../../components/widget/stories';
import ComposeCard from './composeCard';
import FeedPost from './feedPost';
import { SuggestedFriends } from '../../components/widget/suggested_friends';
import { NewJob } from '../../components/widget/new_job';


export default function Feed() {

    return (
        // Header

        // < !--Container -- >
        <div id="main-feed" class="container">

            {/* <!-- Content placeholders at page load --> */}
            {/* {{> feed - shadow - dom}} */}

            {/* Feed page main wrapper --> is-hidden */}
            <div id="activity-feed" class="view-wrap true-dom">
                <div class="columns">


                    {/*Left side column --> is-mobile-hidden */}
                    <div class="column is-3 ">

                        <WeatherWidget />

                        <RecomendedPages />

                        <FakeAd />

                        <LatestActivity />

                    </div>

                    {/* Middle column */}

                    <div class="column is-6">

                        <ComposeCard />

                        <FeedPost />

                        <FeedPost />

                        <FeedPost />

                        <FeedPost />

                        {/* <!-- Load more posts --> */}
                        <div class=" load-more-wrap narrow-top has-text-centered">
                            <a href="#" class="load-more-button">Load More</a>
                        </div>

                    </div>

                    {/* Right side column */}
                    <div class="column is-3">

                        {/* Stories widget */}

                        <Stories />

                        {/* Birthday widget */}

                        <Birthday />

                        {/* Suggested friends widget  */}

                        <SuggestedFriends />

                        {/* New Job Widget */}

                        <NewJob/>
                    </div>
                </div>
            </div>
        </div>
    )
} 