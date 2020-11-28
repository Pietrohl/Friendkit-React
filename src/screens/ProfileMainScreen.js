import React from 'react';
import Page from '../components/Page';
import ProfilePage from '../components/ProfilePage';
import BasicInfosWidget from "../components/pages/profile/widget/BasicInfosWidget";
import PhotosWidget from "../components/pages/profile/widget/PhotosWidget";
import StarFriendsWidget from "../components/pages/profile/widget/StarFriendsWidget";
import VideosWidget from "../components/pages/profile/widget/VideosWidget";
import TripsWidget from "../components/pages/profile/widget/TripsWidget";
import ScheduleWidget from "../components/pages/profile/widget/ScheduleWidget";
import ProfileTimeline from "../components/pages/profile/ProfileTimeline";
import AddConverstaion from "../components/pages/about/modals/AddConverstaion";
import ChangeCover from "../components/pages/about/modals/ChangeCover";
import ChangeProfile from "../components/pages/about/modals/ChangeProfile";
import UploadProfilePicture from "../components/pages/about/modals/UploadProfilePicture";
import UploadCover from "../components/pages/about/modals/UploadCover";
import Share from "../components/pages/about/modals/Share";
import Navbar from '../components/Navbar.js';


function ProfileMainScreen() {
    return (
        <Page title="Profile Timeline">
            <Navbar />
            <div className="view-wrapper">
                {/* <!-- Container --> */}
                <div className="container is-custom">
                    {/* <!-- Profile page main wrapper --> */}
                    <div id="profile-main" className="view-wrap is-headless">
                        <ProfilePage />
                        <div className="columns">
                            <div id="profile-timeline-widgets" className="column is-4">
                                <BasicInfosWidget />
                                <PhotosWidget />
                                <StarFriendsWidget />
                                <VideosWidget />
                                <TripsWidget />
                                <ScheduleWidget />
                            </div>
                            <div className="column is-8">
                                <div id="profile-timeline-posts" className="box-heading">
                                    <h4>Posts</h4>
                                    <div className="button-wrap">
                                        <button type="button" className="button is-active">Recent</button>
                                        <button type="button" className="button">Popular</button>
                                    </div>
                                </div>
                                <div className="profile-timeline">
                                    <ProfileTimeline />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Change cover image modal --> */}
                <ChangeCover />
                {/* <!-- Change profile pic modal --> */}
                <ChangeProfile />
                {/* <!-- User photos and albums --> */}

                {/* <!-- Profile picture crop modal --> */}
                <UploadProfilePicture />
                {/* <!-- Cover image crop modal --> */}
                <UploadCover />
                {/* <!-- Share modal --> */}
                <Share />
            </div>
            <AddConverstaion />
        </Page>
    );
}

export default ProfileMainScreen;