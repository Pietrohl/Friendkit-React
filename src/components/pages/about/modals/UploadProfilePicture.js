import React from 'react';
import { X } from 'react-feather';

function UploadProfilePicture() {
    return (
        <>
            <div id="upload-crop-profile-modal" className="modal upload-crop-profile-modal is-xsmall has-light-bg">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-heading">
                            <h3>Upload Picture</h3>
                            {/* <!-- Close X button --> */}
                            <div className="close-wrap">
                                <span className="close-modal">
                                    <X />
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <label className="profile-uploader-box" htmlFor="upload-profile-picture">
                                <span className="inner-content">
                                    <img src="../../../../assets/img/illustrations/profile/add-profile.svg" alt="" />
                                    <span>Click here to <br />upload a profile picture</span>
                                </span>
                                <input type="file" id="upload-profile-picture" accept="image/*" />
                            </label>
                            <div className="upload-demo-wrap is-hidden">
                                <div id="upload-profile"></div>
                                <div className="upload-help">
                                    <a href="/#" id="profile-upload-reset" className="profile-reset is-hidden">Reset Picture</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button id="submit-profile-picture" className="button is-solid accent-button is-fullwidth raised is-disabled">
                                Use Picture</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UploadProfilePicture;
