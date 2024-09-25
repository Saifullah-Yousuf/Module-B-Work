import React, { useState } from 'react';

const CustomerBookingForm = ({ onSubmit }) => {
    const [customer, setCustomer] = useState({
        CustomerID: '',
        Name: '',
        Email: '',
        Phone: '',
        Address: '',
        BookingHistory: ''
    });

    const [booking, setBooking] = useState({
        BookingID: '',
        RoomID: '',
        BookingDate: '',
        CheckInDate: '',
        CheckOutDate: '',
        Status: 'Pending'
    });

    const handleCustomerChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBooking({ ...booking, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { customer, booking };
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Customer Details</h2>
            <input
                type="text"
                name="CustomerID"
                placeholder="Customer ID"
                value={customer.CustomerID}
                onChange={handleCustomerChange}
                required
            />
            <input
                type="text"
                name="Name"
                placeholder="Name"
                value={customer.Name}
                onChange={handleCustomerChange}
                required
            />
            <input
                type="email"
                name="Email"
                placeholder="Email"
                value={customer.Email}
                onChange={handleCustomerChange}
                required
            />
            <input
                type="text"
                name="Phone"
                placeholder="Phone"
                value={customer.Phone}
                onChange={handleCustomerChange}
                required
            />
            <input
                type="text"
                name="Address"
                placeholder="Address"
                value={customer.Address}
                onChange={handleCustomerChange}
                required
            />
            <textarea
                name="BookingHistory"
                placeholder="Booking History"
                value={customer.BookingHistory}
                onChange={handleCustomerChange}
            />

            <h2>Booking Details</h2>
            <input
                type="text"
                name="BookingID"
                placeholder="Booking ID"
                value={booking.BookingID}
                onChange={handleBookingChange}
                required
            />
            <input
                type="text"
                name="RoomID"
                placeholder="Room ID"
                value={booking.RoomID}
                onChange={handleBookingChange}
                required
            />
            <input
                type="date"
                name="BookingDate"
                value={booking.BookingDate}
                onChange={handleBookingChange}
                required
            />
            <input
                type="date"
                name="CheckInDate"
                value={booking.CheckInDate}
                onChange={handleBookingChange}
                required
            />
            <input
                type="date"
                name="CheckOutDate"
                value={booking.CheckOutDate}
                onChange={handleBookingChange}
                required
            />
            <select
                name="Status"
                value={booking.Status}
                onChange={handleBookingChange}
            >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerBookingForm;
