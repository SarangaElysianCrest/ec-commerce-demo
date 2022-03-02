import React from 'react';
import Logo from '../../../../assets/images/miu_black.png'
const DrawerNavbarLogo = () => {
    return (
        <div className="logo text-center logo-hm5">
            <a className="sticky-none" href="/"> <img className="logo-image" alt="" src={Logo}/></a>
            <a className="sticky-block" href="/"><img className="logo-image" alt="" src={Logo}/></a>
        </div>
    );
};

export default DrawerNavbarLogo;