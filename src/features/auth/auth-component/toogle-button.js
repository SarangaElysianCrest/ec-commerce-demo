import React from 'react';
import {Link} from "react-router-dom";

function ToggleButton({label, linkLabel}) {
    return (
        <div className="login-toggle-btn">
            <input type="checkbox" />
            <label className="ml-10">{label}</label>
            {/*<Link to={process.env.PUBLIC_URL + "/"}>*/}
            {/*    {linkLabel}*/}
            {/*</Link>*/}
        </div>
    );
}

export default ToggleButton;