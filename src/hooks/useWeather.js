import { useState, useEffect } from 'react';
import { fetchWeather } from '../utils/api';

export const useWeather = (city = 'India') => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);
        const data = await fetchWeather(city);
        setWeather(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data');
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
    
    // Refresh every 30 minutes
    const interval = setInterval(getWeather, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [city]);

  return { weather, loading, error };
};