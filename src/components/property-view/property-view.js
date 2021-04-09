import React, { useState } from 'react';
import { useHistory, useParams, withRouter } from 'react-router';
import { getProperty } from '../../services/properties';
import Loader from '../utilities/loader/loader';

import './property-view.css';

const PropertyView = ({ property }) => {
    const {propertyId} = useParams();
    const history = useHistory();

    const [_property, setProperty] = useState(property);

    if(!_property && !propertyId) {
        history.push('/properties');
    } else if(!_property) {
        getProperty(propertyId)
        .then(data => {
            if(data) setProperty(data)
            else throw new Error("Property not found");
        }).catch(err => {
            console.log(err);
            history.push('/properties')
        });
    }

    const renderFacilities = (facilities) => {
        return Object.keys(facilities).filter(facility => facilities[facility]).map((facility, index) => {
            return <div key={index}>{facility}</div>
        });
    }

    const renderReviews = (reviews) => {
        return Object.keys(reviews).map((review, index) => {
            return <div key={index}>{review}: {reviews[review]}</div>
        });
    }

    return (
        <div className="PropertyView">
            {
                !_property ? 
                <div className="PropertyView__loader">
                    <Loader/>
                </div> :
                <div className="PropertyView__content">
                    <img src={`https://via.placeholder.com/458x280?text=${_property.name}`} alt="property_image"/>
                    <div className="PropertyView__details">
                        <div className="PropertyView__highlight">
                            <div className="PropertyView__title">
                                <span className="PropertyView__name">{_property.name}</span>
                                <span className="PropertyView__type">{_property.category.name}</span>
                            </div>
                            <div>{_property.location.address}</div>
                            <div>Ratings: {_property.reviews.overall}</div>
                        </div>
                        <div className="PropertyView__price">
                            Price - ₹ {_property.price}/night
                        </div>
                    </div>
                    <div className="PropertyView__description">
                        {_property.description}
                    </div>
                    <div className="PropertyView__howToReach">
                        <label className="PropertyView__label">How to reach? </label>
                        {_property.location.howToReach}
                    </div>
                    <div className="PropertyView__facilities">
                        <label className="PropertyView__label">Facilities </label>
                        {
                            renderFacilities(_property.facilities)
                        }
                    </div>
                    <div className="PropertyView__reviews">
                        <label className="PropertyView__label">Reviews </label>
                        {
                            renderReviews(_property.reviews)
                        }
                    </div>
                </div>
            }
            
        </div>
    );
}

export default withRouter(PropertyView);