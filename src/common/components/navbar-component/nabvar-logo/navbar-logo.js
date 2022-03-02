import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../../../assets/images/miu_black.png'

const NavbarLogo = ({ imageUrl}) => {
    return (
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                <img className="logo-image" alt="" src={Logo} />
            </Link>
        </div>
    );
};

export default NavbarLogo;