import React, {useEffect, useState} from 'react';
import NavbarLogo from "../../navbar-component/nabvar-logo/navbar-logo";
import NavbarItems from "../../navbar-component/navbar-items/navbar-items";
import NavbarIcons from "../../navbar-component/navbar-icons/navbar-icons";
import Logo from '../../../../assets/images/miu_black.png'

const NavbarCommon = ({}) => {
    return (
        <header className="header-area clearfix ">
            <div className="sticky-bar header-res-padding clearfix ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            {/* header logo */}
                            <NavbarLogo imageUrl={Logo}/>
                        </div>
                        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                            {/* Nav menu */}
                            <NavbarItems direction={"inline-block"}/>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                            {/* Icon group */}
                            <NavbarIcons cssClass={"header-right-wrap"}/>
                        </div>
                    </div>
                </div>
            </div>


                    {/* mobile menu */}
                    {/*<MobileMenu />*/}
        </header>
    );
};

export default NavbarCommon;