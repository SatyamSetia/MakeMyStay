import React from 'react';

import './property-list.css';
import PropertyListItem from './property-list-item';
import { properties } from '../../data/properties';

const PropertyList = () => {
    return (
        <div className="PropertyList">
            {
                properties.map((property, index) => {
                    return <PropertyListItem key={property._propertyId} property={property}/>
                })
            }
        </div>
    );
}

export default PropertyList;