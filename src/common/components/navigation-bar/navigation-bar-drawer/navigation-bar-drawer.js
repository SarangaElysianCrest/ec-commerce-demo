import React from 'react';
import NavbarIcons from "../../navbar-component/navbar-icons/navbar-icons";
import WithAuthController from "../../../../features/auth/AuthControllerWrapper";
import DrawerNavbarLogo from "../../navbar-component/drawer-navbar-logo/drawer-navbar-logo";
import ClickableNavbar from "../../navbar-component/clickable-navbar-menu/clickable-navbar";
import NavbarLogo from "../../navbar-component/nabvar-logo/navbar-logo";
import NavbarItems from "../../navbar-component/navbar-items/navbar-items";

const NavigationBarDrawer = () => {
    return (
        // header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7   stick

            <header className="header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7   ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                                <ClickableNavbar/>
                            </div>
                            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                                {/* Nav menu */}
                                <DrawerNavbarLogo/>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                                {/* Icon group */}
                                <NavbarIcons cssClass={"header-right-wrap header-right-wrap-white"}/>
                            </div>
                        </div>
                    </div>


                {/* mobile menu */}
                {/*<MobileMenu />*/}
            </header>
    );
};

export default NavigationBarDrawer;