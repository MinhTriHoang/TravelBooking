import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Destination() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    
    axios
      .get('/api/destinations')
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
            <li key={index}>{destination.name}</li> 
          ))}
        </ul>
      )}
    </div>
  );
}

export default Destination;
