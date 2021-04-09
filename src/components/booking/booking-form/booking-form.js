import React, { useState } from 'react';

import './booking-form.css';
import { formatDate } from '../../../utils/date';
import DateInput from '../../utilities/form-controls/date-input';
import NumberInput from '../../utilities/form-controls/number-input';
import TextInput from '../../utilities/form-controls/text-input';

const BookingForm = ({createBookingRequest}) => {
    const todayDate = formatDate(new Date());
    const tomorrowDate = formatDate(new Date(), 1);

    const [checkIn, setCheckIn] = useState(todayDate);
    const [checkOut, setCheckOut] = useState(tomorrowDate);

    const [guestCount, setGuestCount] = useState(1);
    const [roomCount, setRoomCount] = useState(1);
    
    const [message, setMessage] = useState("");

    const onRequestBook = () => {
        createBookingRequest({
            checkIn, checkOut, guestCount, roomCount, message
        });
    }

    return (
        <div className="BookingForm">
            <div className="BookingForm__dateInputs">
                <div>
                    <DateInput label="Check In: " date={checkIn} onDateChange={setCheckIn} name="checkInDate"/>
                </div>
                <div>
                    <DateInput label="Check Out: " date={checkOut} onDateChange={setCheckOut} name="checkOutDate"/>
                </div>
            </div>

            <div className="BookingForm__countInputs">
                <div>
                    <NumberInput label="Guests: " number={guestCount} onNumberChange={setGuestCount} name="guestCount" max={10}/>
                </div>
                <div>
                    <NumberInput label="Rooms: " number={roomCount} onNumberChange={setRoomCount} name="roomCount" max={10}/>
                </div>
            </div>
            <div className="BookingForm__messageInput">
                <TextInput label="Message: " text={message} onTextChange={setMessage} name="message" rows={5}/>
            </div>

            <button className="BookingForm__bookNowButton" onClick={onRequestBook}>Request to book</button>
        </div>
    );
}

export default BookingForm;