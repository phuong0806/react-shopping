import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ label, isChecked = false, toggleCheckboxChange }) => (
    <div className="checkbox">
        <label className="checkbox__btn btn-default">
            <input
                type='checkbox'
                value={label}
                checked={isChecked}
                onChange={() => toggleCheckboxChange(label)}
            />
            <span className="checkbox__btn--checkmark checkmark">{label}</span>
        </label>
    </div>
);

export default Checkbox;
