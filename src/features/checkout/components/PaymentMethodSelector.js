import PropTypes from 'prop-types';
import React from "react";
export default function PaymentMethodSelector(props){
    return (
        <div>

        {props.methods.map((method,i)=>(
            <>
            <input key={`payment-method-${method.id}-${i}`}
                type="radio"
                name="payment-method"
                id={method.id}
                value={method.id}
                onChange={(e)=>props.onSelect(e.target.value)}
            /> 
            <label for={method.id}>{method.label}</label>
            </>
            ))
        }
    </div>
    )

}

PaymentMethodSelector.propTypes  = {
    methods: PropTypes.arrayOf(PropTypes.shape({
        methoId: PropTypes.string,
        label: PropTypes.string
    })),
    onSelect: PropTypes.func
}

