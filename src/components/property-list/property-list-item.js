import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { USERTYPES } from '../../config';
import LinkButton from '../utilities/link-button/link-button';

const PropertyListItem = ({property, isUserGuest}) => {
    const history = useHistory();

    const bookNow = () => {
        history.push({
            pathname: '/bookings/new',
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
                {
                    isUserGuest ? <LinkButton label="Book Now" action={bookNow}/> : null
                }
                <LinkButton label="View" action={viewProperty}/>
            </div>
        </div>
    );
}

const mapStateToProps = ({auth}) => {
    return {
        isUserGuest: auth.user ? (auth.user.type === USERTYPES.GUEST ? true : false) : false
    }
}

export default connect(mapStateToProps, null)(PropertyListItem);