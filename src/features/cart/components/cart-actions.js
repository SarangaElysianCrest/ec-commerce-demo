import React from 'react';
import RoundButtons from "../../../common/components/buttons/round-buttons";

const CartActions = ({clearCart}) => {

    function clearCartData() {
        clearCart();
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                        <div className="cart-shiping-update">
                            <RoundButtons  className={"round-button-white"} label={"Continue Shopping"} path={"/shop"}/>
                        </div>
                        <div className="cart-clear">
                            <RoundButtons  className={"round-button-white"} label={"Clear Shopping Cart"}  onClick={e => clearCartData()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartActions;