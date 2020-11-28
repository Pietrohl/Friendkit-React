import React from 'react';
import {
    Smile,
    Search,
    Eye,
} from 'react-feather';
function HeaderDropDown() {
    return (
        <>
            {/* <!-- Dropdown --> */}
            <a href="/#" className="dropdown-item">
                <div className="media">
                    <Smile />
                    <div className="media-content">
                        <h3>Manage</h3>
                        <small>Manage your friend list.</small>
                    </div>
                </div>
            </a>
            <a href="/#" className="dropdown-item">
                <div className="media">
                    <Search />
                    <div className="media-content">
                        <h3>Find friends</h3>
                        <small>Search for new friends.</small>
                    </div>
                </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="/#" className="dropdown-item">
                <div className="media">
                    <Eye />
                    <div className="media-content">
                        <h3>View all</h3>
                        <small>View all friends.</small>
                    </div>
                </div>
            </a>
        </>
    );
}

export default HeaderDropDown;
