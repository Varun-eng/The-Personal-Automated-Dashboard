import React from 'react';
import { useWeather } from '../hooks/useWeather';

const WeatherWidget = () => {
    const { weather, loading, error } = useWeather('London');

    if (loading) return <div className="widget-loading">Loading weather...</div>;
    if (error) return <div className="widget-error">{error}</div>;
    if (!weather) return null;

    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <div className="weather-content">
            <h3>Current Weather</h3>
            <div className="weather-main">
                <img src={iconUrl} alt={weather.weather[0].description} />
                <div className="weather-temp">
                    <span className="temperature">{Math.round(weather.main.temp)}°C</span>
                    <span className="feels-like">Feels like {Math.round(weather.main.feels_like)}°C</span>
                </div>
            </div>
            <div className="weather-details">
                <div className="detail-item">
                    <span className="label">Humidity</span>
                    <span className="value">{weather.main.humidity}%</span>
                </div>
                <div className="detail-item">
                    <span className="label">Wind</span>
                    <span className="value">{weather.wind.speed} m/s</span>
                </div>
                <div className="detail-item">
                    <span className="label">Pressure</span>
                    <span className="value">{weather.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;