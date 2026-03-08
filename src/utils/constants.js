// API Configuration Constants
export const API_CONFIG = {
    // API Keys (In production, these should be in environment variables)
    KEYS: {
        OPENWEATHER: process.env.REACT_APP_OPENWEATHER_API_KEY || 'YOUR_OPENWEATHER_API_KEY',
        NEWSAPI: process.env.REACT_APP_NEWS_API_KEY || 'YOUR_NEWS_API_KEY',
        COINGECKO: process.env.REACT_APP_COINGECKO_API_KEY || '', // Optional
        ALPHA_VANTAGE: process.env.REACT_APP_ALPHA_VANTAGE_KEY || '', // For stocks
    },

    // Base URLs
    BASE_URLS: {
        WEATHER: 'https://api.openweathermap.org/data/2.5',
        NEWS: 'https://newsapi.org/v2',
        CRYPTO: 'https://api.coingecko.com/api/v3',
        STOCKS: 'https://www.alphavantage.co/query',
        FAVICON: 'https://www.google.com/s2/favicons',
    },

    // Timeouts (in milliseconds)
    TIMEOUTS: {
        DEFAULT: 10000, // 10 seconds
        LONG: 30000, // 30 seconds
    },

    // Refresh intervals (in milliseconds)
    REFRESH_INTERVALS: {
        WEATHER: 30 * 60 * 1000, // 30 minutes
        NEWS: 15 * 60 * 1000, // 15 minutes
        CRYPTO: 60 * 1000, // 1 minute
        STOCKS: 5 * 60 * 1000, // 5 minutes
    },
};

// User Configuration
export const USER_CONFIG = {
    DEFAULT_NAME: 'Guest',
    DEFAULT_CITY: 'London',
    DEFAULT_CURRENCY: 'usd',
    AVAILABLE_CURRENCIES: ['usd', 'eur', 'gbp', 'jpy', 'cad', 'aud'],
};

// Weather Constants
export const WEATHER_CONFIG = {
    UNITS: 'metric', // metric = Celsius, imperial = Fahrenheit
    DEFAULT_CITIES: ['London', 'New York', 'Tokyo', 'Sydney', 'Paris'],

    // Weather icon mapping
    ICON_MAP: {
        '01d': '☀️', // clear sky day
        '01n': '🌙', // clear sky night
        '02d': '⛅', // few clouds day
        '02n': '☁️', // few clouds night
        '03d': '☁️', // scattered clouds
        '03n': '☁️', // scattered clouds
        '04d': '☁️', // broken clouds
        '04n': '☁️', // broken clouds
        '09d': '🌧️', // shower rain
        '09n': '🌧️', // shower rain
        '10d': '🌦️', // rain day
        '10n': '🌧️', // rain night
        '11d': '⛈️', // thunderstorm
        '11n': '⛈️', // thunderstorm
        '13d': '❄️', // snow
        '13n': '❄️', // snow
        '50d': '🌫️', // mist
        '50n': '🌫️', // mist
    },
};

// News Constants
export const NEWS_CONFIG = {
    DEFAULT_COUNTRY: 'us',
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100,

    CATEGORIES: [
        { id: 'general', name: 'Top Stories', icon: '📰', color: '#667eea' },
        { id: 'business', name: 'Business', icon: '💼', color: '#2ecc71' },
        { id: 'technology', name: 'Technology', icon: '💻', color: '#3498db' },
        { id: 'science', name: 'Science', icon: '🔬', color: '#9b59b6' },
        { id: 'health', name: 'Health', icon: '🏥', color: '#e74c3c' },
        { id: 'entertainment', name: 'Entertainment', icon: '🎬', color: '#f39c12' },
        { id: 'sports', name: 'Sports', icon: '⚽', color: '#e67e22' },
    ],

    COUNTRIES: [
        { code: 'us', name: 'United States' },
        { code: 'gb', name: 'United Kingdom' },
        { code: 'ca', name: 'Canada' },
        { code: 'au', name: 'Australia' },
        { code: 'in', name: 'India' },
    ],
};

// Cryptocurrency Constants
export const CRYPTO_CONFIG = {
    DEFAULT_CRYPTOS: [
        { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', icon: '₿' },
        { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ' },
        { id: 'cardano', name: 'Cardano', symbol: 'ADA', icon: '₳' },
        { id: 'solana', name: 'Solana', symbol: 'SOL', icon: '◎' },
        { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', icon: '●' },
    ],

    VS_CURRENCIES: [
        { code: 'usd', symbol: '$', name: 'US Dollar' },
        { code: 'eur', symbol: '€', name: 'Euro' },
        { code: 'gbp', symbol: '£', name: 'British Pound' },
        { code: 'jpy', symbol: '¥', name: 'Japanese Yen' },
        { code: 'cad', symbol: 'C$', name: 'Canadian Dollar' },
        { code: 'aud', symbol: 'A$', name: 'Australian Dollar' },
    ],
};

// Stock Market Constants
export const STOCK_CONFIG = {
    DEFAULT_SYMBOLS: [
        { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology' },
        { symbol: 'MSFT', name: 'Microsoft Corp.', sector: 'Technology' },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer Cyclical' },
        { symbol: 'TSLA', name: 'Tesla Inc.', sector: 'Automotive' },
        { symbol: 'JPM', name: 'JPMorgan Chase', sector: 'Financial' },
    ],

    INDICES: [
        { symbol: '^GSPC', name: 'S&P 500', icon: '📈' },
        { symbol: '^IXIC', name: 'NASDAQ', icon: '📊' },
        { symbol: '^DJI', name: 'Dow Jones', icon: '🏛️' },
    ],
};

// Time and Date Constants
export const TIME_CONFIG = {
    GREETINGS: {
        MORNING: { start: 5, end: 11, text: 'Good Morning' },
        AFTERNOON: { start: 12, end: 17, text: 'Good Afternoon' },
        EVENING: { start: 18, end: 20, text: 'Good Evening' },
        NIGHT: { start: 21, end: 4, text: 'Good Night' },
    },

    DATE_FORMATS: {
        FULL: 'full', // Monday, January 1, 2024
        LONG: 'long', // January 1, 2024
        MEDIUM: 'medium', // Jan 1, 2024
        SHORT: 'short', // 1/1/24
    },

    TIME_FORMATS: {
        '12': 'h:mm A', // 2:30 PM
        '24': 'HH:mm', // 14:30
    },
};

// Local Storage Keys
export const STORAGE_KEYS = {
    GOALS: 'dashboard-goals',
    USER_PREFERENCES: 'dashboard-preferences',
    BOOKMARKS: 'dashboard-bookmarks',
    CACHED_WEATHER: 'cached-weather',
    CACHED_NEWS: 'cached-news',
    THEME: 'dashboard-theme',
    CURRENCY: 'dashboard-currency',
};

// UI Constants
export const UI_CONFIG = {
    THEMES: {
        LIGHT: 'light',
        DARK: 'dark',
        AUTO: 'auto',
    },

    ANIMATIONS: {
        DURATION: 300, // ms
        EASING: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    GRID_LAYOUTS: {
        DESKTOP: 'repeat(auto-fit, minmax(350px, 1fr))',
        TABLET: 'repeat(2, 1fr)',
        MOBILE: '1fr',
    },

    BREAKPOINTS: {
        MOBILE: 480,
        TABLET: 768,
        DESKTOP: 1024,
        WIDE: 1400,
    },
};

// Error Messages
export const ERROR_MESSAGES = {
    NETWORK: 'Network error. Please check your connection.',
    TIMEOUT: 'Request timed out. Please try again.',
    API: {
        WEATHER: 'Failed to fetch weather data.',
        NEWS: 'Failed to fetch news articles.',
        CRYPTO: 'Failed to fetch cryptocurrency prices.',
        STOCKS: 'Failed to fetch stock data.',
        GENERAL: 'An error occurred. Please try again.',
    },
    VALIDATION: {
        REQUIRED: 'This field is required.',
        MAX_LENGTH: (max) => `Maximum ${max} characters allowed.`,
        INVALID_URL: 'Please enter a valid URL.',
    },
};

// Success Messages
export const SUCCESS_MESSAGES = {
    GOAL_ADDED: 'Goal added successfully!',
    GOAL_COMPLETED: 'Great job! Goal completed!',
    GOAL_DELETED: 'Goal deleted.',
    SETTINGS_SAVED: 'Settings saved successfully.',
    DATA_REFRESHED: 'Data refreshed successfully.',
};

// Color Palette
export const COLORS = {
    PRIMARY: {
        DEFAULT: '#667eea',
        DARK: '#5a67d8',
        LIGHT: '#8195f0',
        GRADIENT: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    SECONDARY: {
        DEFAULT: '#764ba2',
        DARK: '#6b3f96',
        LIGHT: '#8f5fbd',
    },
    SUCCESS: {
        DEFAULT: '#4caf50',
        DARK: '#3d8b40',
        LIGHT: '#80e27e',
        BG: '#e6f4ea',
    },
    ERROR: {
        DEFAULT: '#f44336',
        DARK: '#d32f2f',
        LIGHT: '#ff6659',
        BG: '#fce8e8',
    },
    WARNING: {
        DEFAULT: '#ff9800',
        DARK: '#f57c00',
        LIGHT: '#ffb74d',
        BG: '#fff3e0',
    },
    INFO: {
        DEFAULT: '#2196f3',
        DARK: '#1976d2',
        LIGHT: '#64b5f6',
        BG: '#e3f2fd',
    },
    NEUTRAL: {
        WHITE: '#ffffff',
        LIGHT: '#f8f9fa',
        MEDIUM: '#e9ecef',
        DARK: '#dee2e6',
        GRAY: '#6c757d',
        DARK_GRAY: '#495057',
        BLACK: '#212529',
    },
};

// Animation Keyframes
export const ANIMATIONS = {
    SPIN: 'spin 1s linear infinite',
    PULSE: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    BOUNCE: 'bounce 1s infinite',
    SLIDE_IN: 'slideIn 0.3s ease-out',
    FADE_IN: 'fadeIn 0.3s ease-in',
};

// Default Goals
export const DEFAULT_GOALS = [
    { id: 1, text: 'Drink 8 glasses of water', completed: false },
    { id: 2, text: 'Exercise for 30 minutes', completed: false },
    { id: 3, text: 'Read for 20 minutes', completed: false },
    { id: 4, text: 'Meditate', completed: false },
];

// Widget Configuration
export const WIDGET_CONFIG = {
    AVAILABLE_WIDGETS: [
        { id: 'weather', name: 'Weather', icon: '🌤️', default: true },
        { id: 'news', name: 'News', icon: '📰', default: true },
        { id: 'finance', name: 'Finance', icon: '📈', default: true },
        { id: 'goals', name: 'Goals', icon: '✅', default: true },
        { id: 'calendar', name: 'Calendar', icon: '📅', default: false },
        { id: 'notes', name: 'Notes', icon: '📝', default: false },
    ],

    SIZES: {
        SMALL: 'small',
        MEDIUM: 'medium',
        LARGE: 'large',
    },
};

// Helper Functions
export const HELPERS = {
    // Get greeting based on hour
    getGreeting: (hour) => {
        if (hour >= 5 && hour < 12) return TIME_CONFIG.GREETINGS.MORNING.text;
        if (hour >= 12 && hour < 18) return TIME_CONFIG.GREETINGS.AFTERNOON.text;
        if (hour >= 18 && hour < 21) return TIME_CONFIG.GREETINGS.EVENING.text;
        return TIME_CONFIG.GREETINGS.NIGHT.text;
    },

    // Format currency
    formatCurrency: (amount, currency = 'usd') => {
        const currencyInfo = CRYPTO_CONFIG.VS_CURRENCIES.find(c => c.code === currency);
        return `${currencyInfo?.symbol || '$'}${amount.toLocaleString()}`;
    },

    // Get category color
    getCategoryColor: (categoryId) => {
        const category = NEWS_CONFIG.CATEGORIES.find(c => c.id === categoryId);
        return category?.color || COLORS.PRIMARY.DEFAULT;
    },

    // Check if it's a trading day/time
    isMarketOpen: () => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const minute = now.getMinutes();

        // Market hours: Monday-Friday, 9:30 AM - 4:00 PM EST
        // This is simplified - you might want to use a proper market hours API
        return day >= 1 && day <= 5 && (hour > 9 || (hour === 9 && minute >= 30)) && hour < 16;
    },
};

// Export all constants as a single object for convenience
export const CONSTANTS = {
    API: API_CONFIG,
    USER: USER_CONFIG,
    WEATHER: WEATHER_CONFIG,
    NEWS: NEWS_CONFIG,
    CRYPTO: CRYPTO_CONFIG,
    STOCKS: STOCK_CONFIG,
    TIME: TIME_CONFIG,
    STORAGE: STORAGE_KEYS,
    UI: UI_CONFIG,
    ERRORS: ERROR_MESSAGES,
    SUCCESS: SUCCESS_MESSAGES,
    COLORS: COLORS,
    ANIMATIONS: ANIMATIONS,
    DEFAULT_GOALS: DEFAULT_GOALS,
    WIDGETS: WIDGET_CONFIG,
    HELPERS: HELPERS,
};

export default CONSTANTS;
