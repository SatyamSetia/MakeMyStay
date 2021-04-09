import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './booking-requests.css';
import { getBookingRequestByHostId } from '../../../services/booking-requests';
import Loader from '../../utilities/loader/loader';
import BookingRequestItem from './booking-request-item';

const BookingRequestsList = ({user}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [requests, setRequests] = useState([]);

    
    useEffect(() => {
        if(user) fetchRequests();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    const fetchRequests = (withLoader = true) => {
        if(withLoader) setIsLoading(true);
        getBookingRequestByHostId(user._userId).then(data => {
            console.log(data);
            setRequests(data);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false);
        })
    }

    const renderRequestList = () => {
        if(requests.length === 0) return <div>No requests found</div>
        return requests.map(request => <BookingRequestItem request={request} key={request._requestId} refreshList={() => fetchRequests(false)}/>);
    }

    return (
        <div className="BookingRequestsList">
            {
                isLoading ? 
                <div className="BookingRequestsList__loader">
                    <Loader/>
                </div> : 
                renderRequestList()
            }
        </div>
    );
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user
    }
}

export default withRouter(connect(mapStateToProps)(BookingRequestsList));