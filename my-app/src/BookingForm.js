import React, { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Booking submitted: ", { name, email, date });

    // Define the booking data
    const bookingData = { name, email, date };
    
    // Send a POST request to your server
    axios.post('/api/booking/create', bookingData) // Changed the URL here
      .then((response) => {
        // Handle the response as needed, such as displaying a success message or redirecting
        console.log('Booking confirmed:', response.data);
      })
      .catch((error) => {
        // Handle any errors, such as displaying an error message
        console.error('Something went wrong:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <input type="submit" value="Submit Booking" />
    </form>
  );
}

export default BookingForm;
