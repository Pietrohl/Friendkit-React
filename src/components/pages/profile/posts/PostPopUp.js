import React from 'react';
import PopupComments from "./PopupComments";
import PopUpHeader from "./PopUpHeader";
import PopupInnerContent from "./PopupInnerContent";

function PostPopUp() {
    return (
        <div className="view-wrapper" >
            <PopUpHeader />
            <PopupInnerContent />
            <PopupComments />
        </div>
    );
}

export default PostPopUp;
