import React from 'react';
import NavbarItems from "../navbar-items/navbar-items";
import SocialMediaLinks from "../../social-media-links/social-media-links";
import Logo from '../../../../assets/images/miu_black.png'


const ClickableMainMenu = ({setDrawer}) => {

    return (
        <div>
            <div className="clickable-mainmenu inside">
            <div className="clickable-mainmenu-icon">
                <button className="clickable-mainmenu-close" onClick={()=>setDrawer(false)}><span className="pe-7s-close"></span></button>
            </div>
            <div className="side-logo">
                <a href="/">
                    <img alt="" src={Logo}/>
                </a>
            </div>
            <div className=" sidebar-menu" >
                <NavbarItems direction={"block"}/>
            </div>
             <SocialMediaLinks/>
        </div>
        </div>
    );
};

export default ClickableMainMenu;