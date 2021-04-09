import React from 'react';
import { withRouter } from 'react-router';

import './booking.css'
import PropertyView from '../property-view/property-view';
import BookingForm from './booking-form/booking-form';

const Booking = ({location, history}) => {
    
    const property = location.state ? location.state.property : null;
    if(!property) history.push('/properties');

    return (
        <div className="Booking">
            <div className="Booking__form">
                <BookingForm/>
            </div>
            <div className="Booking__propertyDetails">
                <PropertyView property={property}/>
            </div>
        </div>
    );
}

export default withRouter(Booking);