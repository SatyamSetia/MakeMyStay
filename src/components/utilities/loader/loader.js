import React from 'react';

import './loader.css';

const Loader = ({size}) => {
    const sizeClass = size === "small" || size === "medium" || size === "large" ? size : "small"; 
    return (
        <div className={`Loader Loader__${sizeClass}`}></div>
    );
}

export default Loader;