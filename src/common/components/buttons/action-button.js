import React from 'react';

const ActionButton = ({type,label})=> {
        return (
            <button type={type}>
                <span>{label}</span>
            </button>
        );
}

export default ActionButton;