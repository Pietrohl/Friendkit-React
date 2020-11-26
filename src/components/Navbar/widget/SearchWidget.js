import { useState } from "react"
import { FileText, MoreVertical, Search, User } from "react-feather"

export const SearchWidget = () => {
    const [isActive, setisActive] = useState(false);
    const [option, setOption] = useState(0);


    const handleChange = (e) => {
        setOption(e.target.value);
    }

    return (
        <div className="navbar-item"  >
            <div id="global-search" className="control">
                <input id="tipue_drop_input" className="input is-rounded" type="text" placeholder="Search" required />
                <span id="clear-search" className="reset-search">
                    <i data-feather="x"></i>
                </span>
                <span className="search-icon">
                    <Search />
                </span>
                <span className={`drop-icon ${!isActive ? 'is-active' : ''}`} onClick={() => setisActive(!isActive)} >
                    <MoreVertical />
                </span>

                <div className={`search-options ${isActive ? 'is-active' : ''}`}>
                    <ul className="options-list" onChange={handleChange}>
                        <input
                            type="radio"
                            name="search-type"
                            id="all" value={0}
                            style={{ display: "none" }}
                        />
                        <label className="radio-label" for="all">
                            <li className={option == 0 ? 'is-selected' : ''} >
                                <span className="option-icon">
                                    <Search />
                                </span>
                                <span className="option-description">
                                    <span>Search All</span>
                                    <span>Search everything </span>
                                </span>
                            </li>
                        </label>
                        <input
                            type="radio"
                            name="search-type"
                            id="people"
                            value={1}
                            style={{ display: "none" }}
                        />
                        <label className="radio-label" for="people">
                            <li className={option == 1 ? 'is-selected' : ''}>
                                <span className="option-icon">
                                    <User />
                                </span>
                                <span className="option-description">
                                    <span>Search People</span>
                                    <span>Search accross people and friends</span>
                                </span>
                            </li>
                        </label>
                        <input
                            type="radio"
                            name="search-type"
                            id="pages"
                            value={2}
                            style={{ display: "none" }}
                        />
                        <label className="radio-label grid" for="pages">
                            <li className={option == 2 ? 'is-selected' : ''}>
                                <span className="option-icon">
                                    <FileText />
                                </span>
                                <span className="option-description">
                                    <span>Search Pages</span>
                                    <span>Search all Posts and news feeds</span>
                                </span>
                            </li>
                        </label>
                    </ul>
                    <div className="is-close">
                        <button id="close-search-options" type="button" className="button is-solid grey-button" onClick={() => { setisActive(false) }}>Close</button>
                    </div>
                </div>

                <div id="tipue_drop_content"></div>
            </div>

        </div>

    )
}