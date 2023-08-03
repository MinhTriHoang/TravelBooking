const Booking = require('../Model/Booking'); 

exports.getAllBookings = (req, res) => {
  
  res.send('List of bookings');
};

exports.getBookingById = (req, res) => {
  
  res.send(`Details of booking with ID: ${req.params.bookingId}`);
};

exports.createBooking = async (req, res) => {
  try {
    
    const { name, email, date } = req.body;

    
    const newBooking = await Booking.create({ name, email, date });

    
    res.status(201).json({ message: 'Booking created', booking: newBooking });
  } catch (error) {
    
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

exports.updateBooking = (req, res) => {

  res.send(`Booking with ID: ${req.params.bookingId} updated`);
};

exports.cancelBooking = (req, res) => {
  
  res.send(`Booking with ID: ${req.params.bookingId} canceled`);
};
