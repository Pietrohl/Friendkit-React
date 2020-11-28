import React from 'react';
import { X } from 'react-feather';

function UploadCover() {
    return (
        <>
            <div id="upload-crop-cover-modal" className="modal upload-crop-cover-modal is-large has-light-bg">
                <div className="modal-background"></div>
                <div className="modal-content">

                    <div className="card">
                        <div className="card-heading">
                            <h3>Upload Cover</h3>
                            {/* <!-- Close X button --> */}
                            <div className="close-wrap">
                                <span className="close-modal">
                                    <X />
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <label className="cover-uploader-box" htmlFor="upload-cover-picture">
                                <span className="inner-content">
                                    <img src="../../../../assets/img/illustrations/profile/add-cover.svg" alt="" />
                                    <span>Click here to <br />upload a cover image</span>
                                </span>
                                <input type="file" id="upload-cover-picture" accept="image/*" />
                            </label>
                            <div className="upload-demo-wrap is-hidden">
                                <div id="upload-cover"></div>
                                <div className="upload-help">
                                    <a href="/#" id="cover-upload-reset" className="cover-reset is-hidden">Reset Picture</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button id="submit-cover-picture" className="button is-solid accent-button is-fullwidth raised is-disabled">Use
                            Picture</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploadCover;
