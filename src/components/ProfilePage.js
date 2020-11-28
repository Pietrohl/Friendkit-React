import React from 'react';
import Cover from "./pages/main/Cover";
import ProfileMenu from "./pages/main/ProfileMenu";

function ProfilePage() {
    return (
        <>
            <div className="columns is-multiline no-margin">
                {/* <!-- Left side column --> */}
                <div className="column is-paddingless">
                    {/* <!-- Timeline Header --> */}
                    <Cover />
                    <ProfileMenu />
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
