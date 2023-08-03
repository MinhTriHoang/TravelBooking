const express = require('express');
const router = express.Router();


router.post('/process', (req, res) => {
  
  res.send('Payment processed');
});


router.get('/status/:paymentId', (req, res) => {
  
  res.send(`Status of payment with ID: ${req.params.paymentId}`);
});

// Export the router
module.exports = router;
