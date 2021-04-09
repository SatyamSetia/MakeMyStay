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

    return (
        <div className="PropertyView">
            {
                !_property ? 
                <Loader/> :
                <div>
                    <img src={`https://via.placeholder.com/458x280?text=${_property.name}`} alt="property_image"/>
                    <div>{_property._propertyId}</div>
                    <div>{_property._propertyId}</div>
                </div>
            }
            
        </div>
    );
}

export default withRouter(PropertyView);