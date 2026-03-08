// API Configuration
const API_KEYS = {
    weather: 'YOUR_OPENWEATHER_API_KEY', // Get from https://openweathermap.org/api
    news: 'YOUR_NEWS_API_KEY', // Get from https://newsapi.org
    crypto: 'YOUR_COINGECKO_API_KEY' // Optional - CoinGecko doesn't require key
};

const BASE_URLS = {
    weather: 'https://api.openweathermap.org/data/2.5',
    news: 'https://newsapi.org/v2',
    crypto: 'https://api.coingecko.com/api/v3'
};

// Generic fetch wrapper with error handling
const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        clearTimeout(id);
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        throw error;
    }
};

// Weather API
export const fetchWeather = async (city) => {
    const url = `${BASE_URLS.weather}/weather?q=${city}&units=metric&appid=${API_KEYS.weather}`;
    return await fetchWithTimeout(url);
};

// News API
export const fetchNews = async (category, pageSize = 5) => {
    const url = `${BASE_URLS.news}/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${API_KEYS.news}`;
    return await fetchWithTimeout(url);
};

// Crypto API (CoinGecko)
export const fetchCryptoPrices = async (cryptos) => {
    const ids = cryptos.join(',');
    const url = `${BASE_URLS.crypto}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`;
    return await fetchWithTimeout(url);
};