import React from 'react';

const PropertyListItem = ({property}) => {
    return (
        <div className="PropertyListItem">
            <img src={`https://via.placeholder.com/150?text=${property.name}`} alt="property_image"/>
            <div className="PropertyListItem__details">
                <span className="PropertyListItem__detailSubHeader">{property.category.name} in {property.location.city.name}</span>
                <span className="PropertyListItem__detailHeader">{property.name}</span>
                
            </div>
        </div>
    );
}

export default PropertyListItem;