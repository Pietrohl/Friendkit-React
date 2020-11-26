import {MoreVertical, FileText, Settings, Trash2, Bookmark} from 'react-feather';

export const RecomendedPages =() => (
    <div class="card">
    <div class="card-heading is-bordered">
        <h4>Recommended Pages</h4>
        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
            <div>
                <div class="button">
                    <MoreVertical/>
                </div>
            </div>
            <div class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                        <div class="media">
                            <FileText/>
                            <div class="media-content">
                                <h3>All Recommandations</h3>
                                <small>View all recommandations.</small>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item">
                        <div class="media">
                            <Settings/>
                            <div class="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                            </div>
                        </div>
                    </a>
                    <hr class="dropdown-divider"/>
                    <a href="#" class="dropdown-item">
                        <div class="media">
                            <Trash2/>
                            <div class="media-content">
                                <h3>Remove</h3>
                                <small>Removes this widget from your feed.</small>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body no-padding">
        {/* <!-- Recommended Page --> */}
        <div class="page-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/icons/logos/fastpizza.svg" data-page-popover="0" alt=""/>
            <div class="page-meta">
                <span>Fast Pizza</span>
                <span>Pizza &amp; Fast Food</span>
            </div>
            <div class="add-page add-transition">
                <Bookmark/>
            </div>
        </div>
        {/* <!-- Recommended Page --> */}
        <div class="page-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/icons/logos/lonelydroid.svg" data-page-popover="1" alt=""/>
            <div class="page-meta">
                <span>Lonely Droid</span>
                <span>Technology</span>
            </div>
            <div class="add-page add-transition">
                <Bookmark/>
            </div>
        </div>
        {/* <!-- Recommended Page --> */}
        <div class="page-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/icons/logos/metamovies.svg" data-page-popover="2" alt=""/>
            <div class="page-meta">
                <span>Meta Movies</span>
                <span>Movies / Entertainment</span>
            </div>
            <div class="add-page add-transition">
                <Bookmark/>
            </div>
        </div>
        {/* <!-- Recommended Page --> */}
        <div class="page-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/icons/logos/nuclearjs.svg" data-page-popover="3" alt=""/>
            <div class="page-meta">
                <span>Nuclearjs</span>
                <span>Technology</span>
            </div>
            <div class="add-page add-transition">
                <Bookmark/>
            </div>
        </div>
        {/* <!-- Recommended Page --> */}
        <div class="page-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/icons/logos/slicer.svg" data-page-popover="4" alt=""/>
            <div class="page-meta">
                <span>Slicer</span>
                <span>Web / Design</span>
            </div>
            <div class="add-page add-transition">
                <Bookmark/>
            </div>
        </div>
    </div>
</div>
)