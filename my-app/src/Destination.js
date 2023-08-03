import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Destination() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch the destinations from your backend
    axios
      .get('/api/destinations') // Replace with your actual API endpoint
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching destinations:", error);
      });
  }, []);

  return (
    <div>
      <h2>Explore Destinations</h2>
      {destinations.length === 0 ? (
        <p>Loading destinations...</p>
      ) : (
        <ul>
          {destinations.map((destination, index) => (
            <li key={index}>{destination.name}</li> // Replace 'name' with the appropriate property from your destination object
          ))}
        </ul>
      )}
    </div>
  );
}

export default Destination;
