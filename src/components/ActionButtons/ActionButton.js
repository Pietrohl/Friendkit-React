import { useState } from "react"
import { Link2, MessageCircle } from "react-feather";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const ActionButton = (props) => {
    const [isActive, setIsActive] = useState(false);
    const { shareModal, setShareModal, setShareText } = props;
    return (
        <>
            <div class="like-wrapper">
                <a href="javascript:void(0);" onClick={() => {setIsActive(!isActive)}} class={`like-button ${isActive ? 'is-active' : ''}`}>
                    <i className="mdi mdi-heart not-liked bouncy" ><AiOutlineHeart /></i>
                    <i className="mdi mdi-heart is-liked bouncy"><AiFillHeart /></i>
                    <span class="like-overlay"></span>
                </a>
            </div>

            <div class="fab-wrapper is-share" onClick={() => setShareModal(!shareModal)}>
                <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                    <Link2 />
                </a>
            </div>

            <div class="fab-wrapper is-comment">
                <a href="javascript:void(0);" class="small-fab">
                    <MessageCircle />
                </a>
            </div>
        </>
    )
}