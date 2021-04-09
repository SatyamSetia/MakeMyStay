import React, { useState } from 'react';

import './booking-requests.css';
import { BOOKING_REQUEST_STATE } from '../../../config';
import LinkButton from '../../utilities/link-button/link-button';
import { updateBookingRequest } from '../../../services/booking-requests';
import Loader from '../../utilities/loader/loader';

const BookingRequestItem = ({ request, refreshList }) => {
    const [isLoading, setIsLoading] = useState(false);

    const updateRequest = (state) => {
        setIsLoading(true);
        updateBookingRequest(request._requestId, state).then(data => {
            console.log(data);
            refreshList();
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const renderActions = () => {
        if (isLoading) return <Loader />

        return (
            <div className="BookingRequestItem__actions">
                <LinkButton label="Approve" action={() => updateRequest(BOOKING_REQUEST_STATE.APPROVED)} />
                <LinkButton label="Reject" action={() => updateRequest(BOOKING_REQUEST_STATE.REJECTED)} />
            </div>
        );
    }

    const renderMessage = () => {
        return (
            <div>
                <div>{request.guestName} has a message for you -</div>
                <div className="BookingRequestItem__messageText">
                    {request.message}
                </div>
            </div>
        );
    }

    return (
        <div className="BookingRequestItem">
            <div className="BookingRequestItem__container">
                <div className="BookingRequestItem__details">
                    <div>You have received a request from {request.guestName}</div>
                    <div className="BookingRequestItem__detailsData">
                        <div className="BookingRequestItem__deatilsItem">
                            <div>Dates</div>
                            <div>{request.checkIn}-{request.checkOut}</div>
                        </div>
                        <div className="BookingRequestItem__deatilsItem">
                            <div>Guests</div>
                            <div>{request.guestCount}</div>
                        </div>
                        <div className="BookingRequestItem__deatilsItem">
                            <div>Rooms</div>
                            <div>{request.roomCount}</div>
                        </div>
                    </div>
                    {
                        request.message.length ?
                            renderMessage() :
                            null
                    }
                </div>
                <div className="BookingRequestItem__property">
                    <img src={`https://via.placeholder.com/140?text=${request.propertyName}`} alt="property_image"/>
                    {request.propertyName}
                </div>
            </div>

            <div className="BookingRequestItem__state">
                {
                    request.state === BOOKING_REQUEST_STATE.PENDING ?
                        renderActions() :
                        <div className={request.state === BOOKING_REQUEST_STATE.APPROVED ? "BookingRequestItem__stateAccept" : "BookingRequestItem__stateReject"}>{request.state}</div>
                }
            </div>

        </div>
    );
}

export default BookingRequestItem;