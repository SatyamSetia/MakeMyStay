import React from 'react';
import { useHistory } from 'react-router';
import LinkButton from '../utilities/link-button/link-button';

const PropertyListItem = ({property}) => {
    const history = useHistory();

    const bookNow = () => {
        history.push({
            pathname: '/booking',
            state: {
                property
            }
        });
    }

    const viewProperty = () => {
        history.push(`/properties/${property._propertyId}`);
    }

    return (
        <div className="PropertyListItem">
            <img src={`https://via.placeholder.com/150?text=${property.name}`} alt="property_image"/>
            <div className="PropertyListItem__details">
                <span className="PropertyListItem__detailSubHeader">{property.category.name} in {property.location.city.name}</span>
                <span className="PropertyListItem__detailHeader">{property.name}</span>
                <LinkButton label="Book Now" action={bookNow}/>
                <LinkButton label="View" action={viewProperty}/>
            </div>
        </div>
    );
}

export default PropertyListItem;