import React from 'react';
import {Link} from "react-router-dom";

const NavbarItems = ({direction}) => {
    return (
        <div className="main-menu">
            <nav>
                <ul>
                    <li style={{display:direction}}>
                        <Link to={process.env.PUBLIC_URL + "/"}>
                            {"HOME"}
                        </Link>
                    </li>
                    <li style={{display:direction}}>
                        <Link to={process.env.PUBLIC_URL + "/shop"}>
                        {"SHOP"}
                    </Link>
                    </li>
                    <li style={{display:direction}}>
                        <Link to={process.env.PUBLIC_URL + "/contact-us"}>
                            {"CONTACT US"}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default NavbarItems;