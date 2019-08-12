import React from 'react';

import './Input.scss';

const Input = ({ handleChangeInput, value }) => (
    <input type="text" className="input" value={value} onChange={handleChangeInput} />
);

export default Input;