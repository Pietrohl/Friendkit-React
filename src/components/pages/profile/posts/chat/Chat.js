import React from 'react';
import ChatTopNavigation from "./ChatTopNavigation";
import ChatBody from "./ChatBody";
import ChatPanel from "./ChatPanel";
import ChatSidebar from "./ChatSidebar";

function Chat() {
    return (
        <div class="chat-wrapper">
            <div class="chat-inner">
                <ChatTopNavigation />
                <ChatSidebar />
                <ChatBody />
                <ChatPanel />
            </div>
        </div>
    );
}

export default Chat;
