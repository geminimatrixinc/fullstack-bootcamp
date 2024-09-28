// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Reports from './Reports';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/reports">Reports</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/reports/*" element={<Reports />} />
            </Routes>
        </Router>
    );
};

export default App;
