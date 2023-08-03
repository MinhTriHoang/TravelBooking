const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
  method: {
    type: String,
    enum: ['credit', 'debit', 'paypal'],
    required: true,
  },
});

module.exports = mongoose.model('Payment', paymentSchema);

