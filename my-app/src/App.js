/*import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Booking from './Booking';
import Destination from './Destination';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/booking" component={Booking} />
            <Route path="/destination" component={Destination} />
            <Route path="/user-profile" component={UserProfile} />
            {/* Add other routes as needed }
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
*/

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Booking from './Booking';
import Destination from './Destination';
import UserProfile from './UserProfile';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Your Travel Booking Website</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/destination">Destinations</Link>
            <Link to="/user-profile">User Profile</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </main>
        {/* Include your Footer component if needed */}
      </div>
    </Router>
  );
}

export default App;


