import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function JobItems() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel responsive={responsive}>

            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../assets/img/demo/unsplash/popovers/pages/slicer.jpg" />
                    <div className="logo-container">
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../assets/img/icons/logos/slicer.svg" data-page-popover="4" />
                    </div>
                </div>
                <h3>Artistic Director</h3>
                <p>Slicer</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    Aug 2019
                </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../assets/img/demo/unsplash/popovers/pages/cssninja.png" />
                    <div className="logo-container">
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../assets/img/avatars/hanzo.svg" data-page-popover="5" />
                    </div>
                </div>
                <h3>Artistic Director</h3>
                <p>Css Ninja</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    Jan 2019
                </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../assets/img/demo/unsplash/popovers/pages/lipflow.jpg" />
                    <div className="logo-container">
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../assets/img/icons/logos/lipflow.svg" data-page-popover="9" />
                    </div>
                </div>
                <h3>Head of Sales</h3>
                <p>Lipflow</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    May 2018
                </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../assets/img/demo/unsplash/popovers/pages/drop.jpg" />
                    <div className="logo-container">
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../assets/img/icons/logos/drop.svg" data-page-popover="10" />
                    </div>
                </div>
                <h3>Manager</h3>
                <p>Drop Cosmetics</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    Oct 2018
                </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../assets/img/demo/unsplash/popovers/pages/imdb.jpg" />
                    <div className="logo-container">
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../assets/img/icons/logos/metamovies.svg" data-page-popover="9" />
                    </div>
                </div>
                <h3>Intern</h3>
                <p>Metamovies</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    May 2018
                </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../assets/img/demo/unsplash/popovers/pages/quick-fashion.jpg" />
                    <div className="logo-container">
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../assets/img/icons/logos/quick-fashion.svg" data-page-popover="9" />
                    </div>
                </div>
                <h3>Intern</h3>
                <p>Quick Fashion</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    Feb 2018
                </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../assets/img/demo/unsplash/popovers/pages/nuclearjs.jpg" />
                    <div className="logo-container">
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../assets/img/icons/logos/nuclearjs.svg" data-page-popover="9" />
                    </div>
                </div>
                <h3>Intern</h3>
                <p>Nuclearjs</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    Jan 2018
                </div>
            </div>
        </Carousel>
    );
}

export default JobItems;
