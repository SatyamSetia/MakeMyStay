import React from 'react';

const NumberInput = ({label, name, number, onNumberChange, max}) => {
    return (
        <React.Fragment>
            <label>{label}</label>
            <input 
                name={name}
                type="number" 
                value={number} 
                onChange={(e) => onNumberChange(e.target.value)}
                className="NumberInput"
                min={1}
                max={max}
            />
        </React.Fragment>
    );
}

export default NumberInput;