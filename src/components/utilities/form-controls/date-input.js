import React from 'react';

const DateInput = ({label, name, date, onDateChange}) => {
    return (
        <React.Fragment>
            <label>{label}</label>
            <input 
                name={name}
                type="date" 
                value={date} 
                onChange={(e) => onDateChange(e.target.value)} 
                className="DateInput"
                min={date}
            />
        </React.Fragment>
    );
}

export default DateInput;