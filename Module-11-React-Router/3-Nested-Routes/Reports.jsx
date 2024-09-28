// Reports.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DailyReports from './DailyReports';
import MonthlyReports from './MonthlyReports';

const Reports = () => {
    return (
        <div>
            <h2>Reports</h2>
            <nav>
                <ul>
                    <li><Link to="daily">Daily Reports</Link></li>
                    <li><Link to="monthly">Monthly Reports</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="daily" element={<DailyReports />} />
                <Route path="monthly" element={<MonthlyReports />} />
            </Routes>
        </div>
    );
};

export default Reports;
