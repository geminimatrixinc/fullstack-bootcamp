// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/user/1">User 1</Link></li>
                    <li><Link to="/user/2">User 2</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
        </Router>
    );
};

export default App;
