import React from 'react';
import {useLocation} from "react-router-dom";

const Breadcrumb = () => {
    let location = useLocation();
    let path = location.pathname.toUpperCase().split("/")
    path = path[1];
    return (
        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <span><span><a aria-current="page" className="active" href="/">HOME</a><span>/</span></span>
                    <span to={location.pathname}>{path}</span></span>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;