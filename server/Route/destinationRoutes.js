const express = require('express');
const DestinationController = require('../controller/DestinationController');

const router = express.Router();

router.get('/', DestinationController.getAllDestinations);

// Retrieve featured destinations
router.get('/featured', DestinationController.getFeaturedDestinations);

// Retrieve a specific destination by ID
router.get('/:id', DestinationController.getDestinationById); 
router.get('/', DestinationController.getAllDestinations);
router.get('/:destinationId', DestinationController.getDestinationById);
router.post('/create', DestinationController.createDestination);
router.put('/update/:destinationId', DestinationController.updateDestination);
router.delete('/delete/:destinationId', DestinationController.deleteDestination);

module.exports = router;

