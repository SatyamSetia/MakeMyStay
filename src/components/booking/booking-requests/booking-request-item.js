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
        if(isLoading) return <Loader/>
        
        return (
            <div>
                <LinkButton label="Approve" action={() => updateRequest(BOOKING_REQUEST_STATE.APPROVED)} />
                <LinkButton label="Reject" action={() => updateRequest(BOOKING_REQUEST_STATE.REJECTED)} />
            </div>
        );
    }

    return (
        <div className="BookingRequestItem">
            {request._requestId}
            {
                request.state === BOOKING_REQUEST_STATE.PENDING ? 
                renderActions() :
                    <div>{request.state}</div>
            }
        </div>
    );
}

export default BookingRequestItem;