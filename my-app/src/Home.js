import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [featuredDestinations, setFeaturedDestinations] = useState([]);

  useEffect(() => {
    axios
      .get('/api/destinations/featured') // Replace with your actual API endpoint
      .then((response) => {
        setFeaturedDestinations(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching featured destinations:", error);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to Travel Booking!</h2>
      <h3>Featured Destinations:</h3>
      {featuredDestinations.length === 0 ? (
        <p>Loading featured destinations...</p>
      ) : (
        <ul>
          {featuredDestinations.map((destination, index) => (
            <li key={index}>{destination.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
