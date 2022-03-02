import React from 'react';
import SocialMediaLinks from "../../social-media-links/social-media-links";
import {Link} from "react-router-dom";


const MobileMenu = ({setDrawer}) => {
    return (
        <div className="offcanvas-mobile-menu active" id="offcanvas-mobile-menu">
            <button className="offcanvas-menu-close" id="mobile-menu-close-trigger" onClick={()=>setDrawer(false)}>
                <i className="pe-7s-close"></i>
            </button>
            <div className="offcanvas-wrapper">
                <div className="offcanvas-inner-content">
                    <div className="offcanvas-mobile-search-area">
                        <form action="#">
                            <input type="search" placeholder="Search ..."/>
                                <button type="submit">
                                    <i className="fa fa-search"/>
                                </button>
                        </form>
                    </div>
                    <nav className="offcanvas-navigation" id="offcanvas-navigation">
                        <ul>
                            <li><a href="/contact">HOME</a></li>
                            <li><a href="/contact">SHOP</a></li>
                            <li><a href="/contact">CONTACT US</a></li>
                            <li><a href="/login">LOGIN</a></li>
                            <li><a href="/register">REGISTER</a></li>
                        </ul>
                    </nav>
                    <div className="offcanvas-widget-area">
                        <div className="off-canvas-contact-widget">
                            <div className="header-contact-info">
                                <ul className="header-contact-info__list">
                                    <li><i className="fa fa-phone"></i> <a href="tel://12452456012">(1245) 2456 012 </a>
                                    </li>
                                    <li><i className="fa fa-envelope"></i> <a
                                        href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <SocialMediaLinks/>

                </div>
            </div>
        </div>
    );
};

export default MobileMenu;