import React from 'react';

const TextField = ({type,name,placeholder,onClick,value}) => {
        return (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        );
}

export default TextField;