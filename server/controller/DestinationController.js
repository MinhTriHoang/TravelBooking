const Destination = require('../Model/Destination');

// Retrieve a list of all destinations
exports.getAllDestinations = (req, res) => {
  Destination.find({})
    .then((destinations) => {
      res.json(destinations);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('An error occurred while fetching all destinations');
    });
};

exports.deleteDestination = (req, res) => {
    const destinationId = req.params.destinationId;
  
    Destination.findByIdAndDelete(destinationId)
      .then((deletedDestination) => {
        if (deletedDestination) {
          res.json({ message: `Destination with ID: ${destinationId} deleted successfully` });
        } else {
          res.status(404).send(`Destination with ID: ${destinationId} not found`);
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`An error occurred while deleting the destination with ID: ${destinationId}`);
      });
  };

exports.updateDestination = (req, res) => {
    const destinationId = req.params.destinationId;
    const destinationData = req.body;
  
    Destination.findByIdAndUpdate(destinationId, destinationData, { new: true })
      .then((updatedDestination) => {
        if (updatedDestination) {
          res.json(updatedDestination);
        } else {
          res.status(404).send(`Destination with ID: ${destinationId} not found`);
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`An error occurred while updating the destination with ID: ${destinationId}`);
      });
  };

// Retrieve a specific destination by ID
exports.getDestinationById = (req, res) => {
  Destination.findById(req.params.id)
    .then((destination) => {
      if (destination) {
        res.json(destination);
      } else {
        res.status(404).send(`Destination with ID: ${req.params.id} not found`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(`An error occurred while fetching the destination with ID: ${req.params.id}`);
    });
};

// Retrieve featured destinations
exports.getFeaturedDestinations = (req, res) => {
  Destination.find({ featured: true }) // Assuming you have a 'featured' field in your schema
    .then((destinations) => {
      res.json(destinations);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('An error occurred while fetching featured destinations');
    });
};

// Create a new destination
exports.createDestination = (req, res) => {
  const destinationData = req.body;
  Destination.create(destinationData)
    .then((destination) => {
      res.status(201).json(destination);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('An error occurred while creating the destination');
    });
};

// Add more functions for update and delete operations if needed
