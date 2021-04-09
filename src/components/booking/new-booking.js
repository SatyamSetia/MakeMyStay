import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import './booking.css'
import PropertyView from '../property-view/property-view';
import BookingForm from './booking-form/booking-form';
import { createBookingRequestService } from '../../services/booking-requests';

const NewBooking = ({location, history, user}) => {
    
    const property = location.state ? location.state.property : null;
    if(!property || !user) history.push('/properties');

    const createBookingRequest = (details) => {
        const bookingRequest = {
            ...details,
            _propertyId: property._propertyId,
            _guestId: user._userId
        }

        createBookingRequestService(bookingRequest).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="Booking">
            <div className="Booking__form">
                <BookingForm createBookingRequest={createBookingRequest}/>
            </div>
            <div className="Booking__propertyDetails">
                <PropertyView property={property}/>
            </div>
        </div>
    );
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user
    }
}

export default withRouter(connect(mapStateToProps)(NewBooking));