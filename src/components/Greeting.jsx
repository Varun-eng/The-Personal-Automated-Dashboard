import React, { useState, useEffect } from 'react';

const Greeting = ({ userName }) => {
    const [greeting, setGreeting] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            if (hour < 12) setGreeting('Good Morning');
            else if (hour < 18) setGreeting('Good Afternoon');
            else setGreeting('Good Evening');
        };

        updateGreeting();

        // Update time every minute
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    const formattedDate = currentTime.toLocaleDateString([], {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="greeting-container">
            <h1 className="greeting">
                {greeting}, {userName}!
            </h1>
            <div className="datetime">
                <span className="time">{formattedTime}</span>
                <span className="date">{formattedDate}</span>
            </div>
        </div>
    );
};

export default Greeting;