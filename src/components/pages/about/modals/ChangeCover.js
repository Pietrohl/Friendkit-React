import React from 'react';
import { X } from 'react-feather';

function ChangeCover() {
    return (
        <>

            <div id="change-cover-modal" className="modal change-cover-modal is-medium has-light-bg">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-heading">
                            <h3>Update Cover</h3>
                            {/* <!-- Close X button --> */}
                            <div className="close-wrap">
                                <span className="close-modal">
                                    <X />
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            {/* <!-- Placeholder --> */}
                            <div className="selection-placeholder">
                                <div className="columns">
                                    <div className="column is-6">
                                        {/* <!-- Selection box --> */}
                                        <div className="selection-box modal-trigger" data-modal="upload-crop-cover-modal">
                                            <div className="box-content">
                                                <img src="../../../../../assets/img/illustrations/profile/upload-cover.svg" alt="" />
                                                <div className="box-text">
                                                    <span>Upload</span>
                                                    <span>From your computer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6">
                                        {/* <!-- Selection box --> */}
                                        <div className="selection-box modal-trigger" data-modal="user-photos-modal">
                                            <div className="box-content">
                                                <img src="../../../../../assets/img/illustrations/profile/change-cover.svg" alt="" />
                                                <div className="box-text">
                                                    <span>Choose</span>
                                                    <span>From your photos</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ChangeCover;
