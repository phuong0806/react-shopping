import React from 'react';

import './Button.scss';

const Button = ({children, onClick, type, style}) => (
    <button 
        style={style} 
        className={'btn btn__' + type} 
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
