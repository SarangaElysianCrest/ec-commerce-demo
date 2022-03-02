import React, {useEffect} from 'react';
import Breadcrumb from "../../common/components/breadcrumb";
import CompareLayout from "./component/CompareLayout";
import CompareWrapper from "./CompareWrapper";
import {useLocation} from "react-router";

const CompareView = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Breadcrumb/>
            <CompareLayout {...props}/>
        </div>
    );
};

export default CompareWrapper(CompareView);