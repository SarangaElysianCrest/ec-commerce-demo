import React from 'react';
import RoundButtons from "../../../common/components/buttons/round-buttons";

const CartProceeds = ({total,onHandleCouponCode}) => {

    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-6">
                    <div className="cart-tax">
                        <div className="title-wrap">
                            <h4 className="cart-bottom-title section-bg-gray">
                                Free Delivery Within Colombo
                            </h4>
                        </div>
                        <div className="tax-wrapper">
                            <p>For Deliveries outside Colombo Refer the&nbsp;&nbsp;
                                <a href="">Chart</a> below
                            </p>
                        </div>
                    </div>
                </div>


                {/*<div className="col-lg-4 col-md-6">*/}
                {/*    <form onSubmit={e => handleCouponCode(e)}>*/}
                {/*    <div className="discount-code-wrapper">*/}
                {/*        <div className="title-wrap"><h4 className="cart-bottom-title section-bg-gray">Use Coupon*/}
                {/*            Code</h4></div>*/}
                {/*        <div className="discount-code"><p>Enter your coupon code if you have one.</p>*/}
                {/*                <input type="text" required="" name="name" onChange={e=>setPromoCode(e.target.value)} className="mb-4"/>*/}
                {/*                <RoundButtons className={"cart-btn-2"} type={"submit"} label={"Apply Coupon"} />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    </form>*/}
                {/*</div>*/}


                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="grand-totall">
                        <div className="title-wrap">
                            <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                        </div>
                        <h5>Total products <span>{total}</span></h5>
                        <h4 className="grand-totall-title">Grand Total <span>{total}</span></h4>
                        {/*<a href="/checkout">Proceed to Checkout</a>*/}
                        <RoundButtons className={"cart-btn-2"} type={"submit"} label={"Proceed to Checkout"} path={"/checkout"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProceeds;