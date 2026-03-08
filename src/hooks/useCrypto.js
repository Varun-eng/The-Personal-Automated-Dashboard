import { useState, useEffect } from 'react';
import { fetchCryptoPrices } from '../utils/api';

export const useCrypto = (cryptoSymbols = ['bitcoin', 'ethereum', 'cardano']) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCryptoPrices = async () => {
            try {
                setLoading(true);
                const data = await fetchCryptoPrices(cryptoSymbols);
                setCryptoData(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch crypto prices');
                console.error('Crypto fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        getCryptoPrices();

        // Refresh every 60 seconds
        const interval = setInterval(getCryptoPrices, 60000);

        return () => clearInterval(interval);
    }, [cryptoSymbols.join(',')]);

    return { cryptoData, loading, error };
};