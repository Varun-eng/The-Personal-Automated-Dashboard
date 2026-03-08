import { useState, useEffect } from 'react';
import { fetchNews } from '../utils/api';

export const useNews = (category = 'general') => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                const data = await fetchNews(category);
                setNews(data.articles || []);
                setError(null);
            } catch (err) {
                setError('Failed to fetch news');
                console.error('News fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        getNews();

        // Refresh every 15 minutes
        const interval = setInterval(getNews, 15 * 60 * 1000);

        return () => clearInterval(interval);
    }, [category]);

    return { news, loading, error };
};