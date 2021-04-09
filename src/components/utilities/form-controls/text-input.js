import React from 'react';

import './form-controls.css';

const TextInput = ({label, name, text, onTextChange, rows=1}) => {
    return (
        <React.Fragment>
            <label>{label}</label>
            <textarea 
                name={name}
                placeholder={label}
                type="text" 
                value={text} 
                onChange={(e) => onTextChange(e.target.value)}
                className="TextArea"
                rows={rows}
            />
        </React.Fragment>
    );
}

export default TextInput;