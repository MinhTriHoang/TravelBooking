const express = require('express');
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  cancelBooking,
} = require('./bookingHandlers'); // Adjust the path as needed

const router = express.Router();

router.get('/', getAllBookings);
router.get('/:bookingId', getBookingById);
router.post('/create', createBooking);
router.put('/update/:bookingId', updateBooking);
router.delete('/cancel/:bookingId', cancelBooking);

console.log(getAllBookings, getBookingById, createBooking, updateBooking, cancelBooking);

module.exports = router;
