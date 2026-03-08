import React, { useState } from 'react';
import { useCrypto } from '../hooks/useCrypto';

const FinanceWidget = () => {
    const { cryptoData, loading, error } = useCrypto(['bitcoin', 'ethereum', 'cardano']);
    const [selectedCurrency, setSelectedCurrency] = useState('usd');

    // Format large numbers with commas
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: selectedCurrency.toUpperCase(),
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(price);
    };

    // Format percentage change with sign
    const formatChange = (change) => {
        const formattedChange = change.toFixed(2);
        return change > 0 ? `+${formattedChange}%` : `${formattedChange}%`;
    };

    // Get color class for price change
    const getChangeClass = (change) => {
        return change >= 0 ? 'positive' : 'negative';
    };

    // Crypto display names and icons (you could use actual icons from a library)
    const cryptoInfo = {
        bitcoin: { name: 'Bitcoin', symbol: 'BTC', icon: '₿' },
        ethereum: { name: 'Ethereum', symbol: 'ETH', icon: 'Ξ' },
        cardano: { name: 'Cardano', symbol: 'ADA', icon: '₳' }
    };

    if (loading) {
        return (
            <div className="finance-content">
                <h3>Market Overview</h3>
                <div className="widget-loading">
                    <div className="spinner-small"></div>
                    <p>Fetching crypto prices...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="finance-content">
                <h3>Market Overview</h3>
                <div className="widget-error">
                    <p>{error}</p>
                    <button className="retry-btn" onClick={() => window.location.reload()}>
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    // If no data, show empty state
    if (!cryptoData || Object.keys(cryptoData).length === 0) {
        return (
            <div className="finance-content">
                <h3>Market Overview</h3>
                <div className="empty-state">
                    <p>No cryptocurrency data available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="finance-content">
            <div className="finance-header">
                <h3>Market Overview</h3>
                <select
                    className="currency-selector"
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                </select>
            </div>

            <div className="crypto-list">
                {Object.entries(cryptoData).map(([id, data]) => {
                    const info = cryptoInfo[id] || {
                        name: id.charAt(0).toUpperCase() + id.slice(1),
                        symbol: id.slice(0, 3).toUpperCase(),
                        icon: '₿'
                    };

                    return (
                        <div key={id} className="crypto-card">
                            <div className="crypto-main-info">
                                <span className="crypto-icon">{info.icon}</span>
                                <div className="crypto-name-wrapper">
                                    <span className="crypto-name">{info.name}</span>
                                    <span className="crypto-symbol">{info.symbol}</span>
                                </div>
                            </div>

                            <div className="crypto-price-info">
                                <span className="crypto-price">
                                    {formatPrice(data.usd)}
                                </span>
                                <span className={`crypto-change ${getChangeClass(data.usd_24h_change)}`}>
                                    {formatChange(data.usd_24h_change)}
                                </span>
                            </div>

                            {/* Mini chart placeholder - you could add sparkline charts here */}
                            <div className="crypto-mini-chart">
                                <div className="chart-bar" style={{
                                    width: '100%',
                                    height: '2px',
                                    background: data.usd_24h_change >= 0 ? '#4caf50' : '#f44336',
                                    opacity: 0.3
                                }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Additional market summary */}
            <div className="market-summary">
                <div className="summary-item">
                    <span className="summary-label">Market Cap</span>
                    <span className="summary-value">$2.1T</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">24h Volume</span>
                    <span className="summary-value">$85.3B</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">BTC Dominance</span>
                    <span className="summary-value">48.2%</span>
                </div>
            </div>

            <div className="update-info">
                <span className="update-text">Auto-updates every 60s</span>
                <button
                    className="refresh-btn"
                    onClick={() => window.location.reload()}
                    title="Refresh now"
                >
                    ↻
                </button>
            </div>
        </div>
    );
};

export default FinanceWidget;