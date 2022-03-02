import React from 'react';

const CheckoutTextField = ({label, type,val,value}) => {
    return (
        <div className="billing-info mb-20">
            <input type={type} name={label} defaultValue={val} value={value}/>
        </div>
    );
};

export default CheckoutTextField;