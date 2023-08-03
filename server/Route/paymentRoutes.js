const express = require('express');
const PaymentController = require('../controllers/PaymentController');
const router = express.Router();

router.get('/', PaymentController.getAllPayments);
router.get('/:paymentId', PaymentController.getPaymentById);
router.post('/create', PaymentController.createPayment);
router.put('/update/:paymentId', PaymentController.updatePayment);
router.delete('/cancel/:paymentId', PaymentController.cancelPayment);

module.exports = router;

