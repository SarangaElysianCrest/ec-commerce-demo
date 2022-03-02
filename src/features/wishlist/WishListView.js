import React from 'react';
import Breadcrumb from "../../common/components/breadcrumb";
import WishListLayout from "./component/WishListLayout";
import WhishlistWrapper from "./WhishlistWrapper";

const WishListView = (props) => {
    return (
        <div>
            <Breadcrumb/>
            <WishListLayout {...props}/>
        </div>
    );
};

export default  WhishlistWrapper(WishListView);