import React from 'react';

const IconButtons = ({buttonClass,iconClass,onClick}) => {
    return (
        <button className={buttonClass} onClick={e => onClick(e)}>
            <i className={iconClass} />
        </button>
    );
};

export default IconButtons;