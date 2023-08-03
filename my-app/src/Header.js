import React from 'react';

function Header() {
  return (
    <header>
      <h1>Your Travel Booking Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/booking">Booking</a>
        <a href="/destination">Destinations</a>
        <a href="/user-profile">User Profile</a>
      </nav>
    </header>
  );
}

export default Header;
