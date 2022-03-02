import React from 'react';
import {Link} from "react-router-dom";

const RoundButtons = ({className,type,label,path, onClick}) => {
    return (
        <div>
            {
                path ?

                    <Link to={path}>
                    <button className={className ? className :  "round-button-checkout"} type={type} onClick={onClick}>{label}</button>
                     </Link>
                    :
                    <button className={className ? className :  "round-button-checkout mt-4"} type={type} onClick={onClick}>{label}</button>
            }


        </div>
    );
};

export default RoundButtons;