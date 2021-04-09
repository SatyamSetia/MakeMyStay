import React from 'react';

import './link-button.css';

const LinkButton = ({label, action}) => {
    return (
        <div onClick={action} className="LinkButton">
            {label}
        </div>
    );
}

export default LinkButton;