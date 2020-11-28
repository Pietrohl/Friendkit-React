import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function TimelineItem() {
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
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../../../../assets/img/demo/unsplash/popovers/pages/brent.jpg" />
                    <div className="logo-container" >
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../../../../assets/img/icons/logos/brent.svg" data-page-popover="6" />
                    </div>
                </div>
                <h3>Master Degree</h3>
                <p>Brent University</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    Aug 2016
                </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../../../../assets/img/demo/unsplash/popovers/pages/drop.jpg" />
                    <div className="logo-container" >
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../../../../assets/img/icons/logos/drop.svg" data-page-popover="10" />
                    </div>
                </div>
                <h3>Internship</h3>
                <p>Drop Cosmetics</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    May 2016
                    </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../../../../assets/img/demo/unsplash/popovers/pages/quick-fashion.jpg" />
                    <div className="logo-container">
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../../../../assets/img/icons/logos/quick-fashion.svg" data-page-popover="11" />
                    </div>
                </div>
                <h3>Internship</h3>
                <p>Quick Fashion</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    Oct 2015
                    </div>
            </div>
            {/* <!--Timeline Item--> */}
            <div className="timeline-item">
                <div className="image-container">
                    <img src="https://via.placeholder.com/800x600" alt="" data-demo-src="../../../../assets/img/demo/unsplash/popovers/pages/brent.jpg" />
                    <div className="logo-container" >
                        <img src="https://via.placeholder.com/150x150" alt="" data-demo-src="../../../../assets/img/icons/logos/brent.svg" data-page-popover="6" />
                    </div>
                </div>
                <h3>Bachelor Degree</h3>
                <p>Brent University</p>
                <div className="more">
                    <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                </div>
                <div className="date">
                    Jul 2015
                </div>
            </div>
        </Carousel>
    );
}

export default TimelineItem;
