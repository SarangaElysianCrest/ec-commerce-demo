import React from 'react';
import {Link} from "react-router-dom";

const HeroSlider = () => {

    return (
        <div className="slider-area">
            <div className="slider-active-2 nav-style-3">
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper">
                        <div className="slider-height-5 d-flex align-items-center bg-img swiper-slide swiper-slide-active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                        <div className="slider-content-6 slider-animated-1 text-center">
                                            <div className="slider-btn-5 btn-hover">
                                                <Link
                                                    className="animated"
                                                    to={process.env.PUBLIC_URL +'/shop'}
                                                >
                                                    SHOP NOW
                                                </Link>
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


    );
};

export default HeroSlider;