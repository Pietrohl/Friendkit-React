import React from 'react';
import Page from '../components/Page';
import ProfilePage from '../components/ProfilePage';
import AboutSection from '../components/pages/about/AboutSection';
import AddConverstaion from "../components/pages/about/modals/AddConverstaion";
import ChangeCover from "../components/pages/about/modals/ChangeCover";
import ChangeProfile from "../components/pages/about/modals/ChangeProfile";
import UploadProfilePicture from "../components/pages/about/modals/UploadProfilePicture";
import UploadCover from "../components/pages/about/modals/UploadCover";
import Share from "../components/pages/about/modals/Share";
import Navbar from '../components/Navbar.js';
function ProfileAbout() {
    return (
        <Page title="Profile About">
            <Navbar />
            <div className="view-wrapper">
                {/* <!-- Container --> */}
                <div className="container is-custom">
                    {/* <!-- Profile page main wrapper --> */}
                    <div id="profile-about" className="view-wrap is-headless">
                        <ProfilePage />
                        <div className="column">
                            {/* <!-- About sections --> */}
                            <AboutSection />
                        </div >
                    </div >
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
        </Page >
    );
}

export default ProfileAbout;
