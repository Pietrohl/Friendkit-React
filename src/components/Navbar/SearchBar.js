import React from 'react';
import {
    Search,
    Users,
    FileText
} from 'react-feather';
function SearchBar() {
    return (
        <div className="search-options">
            <ul className="options-list">
                {/* <!-- Search Option --> */}
                <li className="is-selected">
                    <label className="material-radio" >
                        <input type="radio" name="search-type" />
                        <span className="radio-label"></span>
                    </label>
                    <span className="option-icon">
                        <Search />
                    </span>
                    <span className="option-description">
                        <span>Search All</span>
                        <span>Search everything </span>
                    </span>
                </li>
                {/* <!-- Search Option --> */}
                <li>
                    <span className="option-icon">
                        <Users />
                    </span>
                    <span className="option-description">
                        <span>Search People</span>
                        <span>Search accross people and friends</span>
                    </span>
                </li>
                {/* <!-- Search Option --> */}
                <li>
                    <span className="option-icon">
                        <FileText />
                    </span>
                    <span className="option-description">
                        <span>Search Pages</span>
                        <span>Search all Posts and news feeds</span>
                    </span>
                </li>
            </ul>
            {/* <!-- Close --> */}
            <div className="is-close">
                <button id="close-search-options" type="button" className="button is-solid grey-button">Close</button>
            </div>
        </div>

    );
}

export default SearchBar;
