import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './property-list.css';
import PropertyListItem from './property-list-item';
import { USERTYPES } from '../../config';
import { getAllProperties, getPropertiesByHostId } from '../../services/properties';
import { withRouter } from 'react-router';
import Loader from '../utilities/loader/loader';

const PropertyList = ({user}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchProperties = async () => {
        setIsLoading(true);
        try {
            let response;
            if(user.type === USERTYPES.HOST) {
                response = await getPropertiesByHostId(user._userId);
            } else {
                response = await getAllProperties();
            }
            setProperties(response);
        } catch(err) {
            console.log(err);
        }
        setIsLoading(false);
    }

    const listHeader = user.type === USERTYPES.GUEST ? `${properties.length} properties listed near you -` : 
    `You have ${properties.length} properties listed -`;

    const renderPropertyList = () => {
        return (
            <div className="PropertyList">
                <div className="PropertyList__header">{listHeader}</div>
                {
                    properties.map((property, index) => {
                        return <PropertyListItem key={property._propertyId} property={property}/>
                    })
                }
            </div>
        );
    }

    return (
        <div className="PropertyList">
            {
                isLoading ? 
                <div className="PropertyList__loader">
                    <Loader/>
                </div>:
                renderPropertyList()
            }
        </div>
    );
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user
    }
}

export default withRouter(connect(mapStateToProps)(PropertyList));