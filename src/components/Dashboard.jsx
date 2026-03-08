import React, { useState, useEffect } from 'react';
import WeatherWidget from './WeatherWidget';
import NewsWidget from './NewsWidget';
import FinanceWidget from './FinanceWidget';
import GoalTracker from './GoalTracker';
import Greeting from './Greeting';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userName] = useState('Alex'); // Could be made editable

    useEffect(() => {
        // Simulate initial loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="dashboard-loading">
                <div className="spinner"></div>
                <p>Loading your dashboard...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-error">
                <h3>Something went wrong</h3>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    return (
        <div className="dashboard">
            <Greeting userName={userName} />

            <div className="dashboard-grid">
                <div className="widget weather-widget">
                    <WeatherWidget />
                </div>

                <div className="widget news-widget">
                    <NewsWidget />
                </div>

                <div className="widget finance-widget">
                    <FinanceWidget />
                </div>

                <div className="widget goals-widget">
                    <GoalTracker />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;