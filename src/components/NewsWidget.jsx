import React, { useState } from 'react';
import { useNews } from '../hooks/useNews';

const NewsWidget = () => {
    const [category, setCategory] = useState('general');
    const { news, loading, error } = useNews(category);
    const [expandedNews, setExpandedNews] = useState(null);

    const categories = [
        { id: 'general', name: 'Top Stories', icon: '📰' },
        { id: 'business', name: 'Business', icon: '💼' },
        { id: 'technology', name: 'Technology', icon: '💻' },
        { id: 'science', name: 'Science', icon: '🔬' },
        { id: 'health', name: 'Health', icon: '🏥' },
        { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
        { id: 'sports', name: 'Sports', icon: '⚽' }
    ];

    // Format published time
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    // Truncate text
    const truncateText = (text, maxLength = 100) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength).lastIndexOf(' ') > 0
            ? text.substr(0, text.lastIndexOf(' ', maxLength)) + '...'
            : text.substr(0, maxLength) + '...';
    };

    // Get source favicon
    const getSourceFavicon = (url) => {
        try {
            const domain = new URL(url).hostname;
            return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
        } catch {
            return null;
        }
    };

    if (loading && news.length === 0) {
        return (
            <div className="news-content">
                <h3>Latest News</h3>
                <div className="widget-loading">
                    <div className="spinner-small"></div>
                    <p>Fetching latest news...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="news-content">
                <h3>Latest News</h3>
                <div className="widget-error">
                    <p>{error}</p>
                    <button className="retry-btn" onClick={() => window.location.reload()}>
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="news-content">
            <div className="news-header">
                <h3>Latest News</h3>
                <div className="news-categories">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`category-btn ${category === cat.id ? 'active' : ''}`}
                            onClick={() => setCategory(cat.id)}
                            title={cat.name}
                        >
                            <span className="category-icon">{cat.icon}</span>
                            <span className="category-name">{cat.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="news-list">
                {news.length === 0 ? (
                    <div className="empty-news">
                        <p>No news articles available for this category</p>
                    </div>
                ) : (
                    news.map((article, index) => (
                        <div
                            key={index}
                            className={`news-item ${expandedNews === index ? 'expanded' : ''}`}
                            onClick={() => setExpandedNews(expandedNews === index ? null : index)}
                        >
                            {article.urlToImage && (
                                <div className="news-image-container">
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="news-image"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}

                            <div className="news-content-wrapper">
                                <div className="news-title-section">
                                    <h4 className="news-title">{article.title}</h4>
                                    {article.description && (
                                        <p className="news-description">
                                            {expandedNews === index
                                                ? article.description
                                                : truncateText(article.description, 80)}
                                        </p>
                                    )}
                                </div>

                                <div className="news-meta">
                                    <div className="news-source">
                                        {article.url && (
                                            <img
                                                src={getSourceFavicon(article.url)}
                                                alt=""
                                                className="source-favicon"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                        <span className="source-name">
                                            {article.source?.name || 'Unknown Source'}
                                        </span>
                                    </div>

                                    <span className="news-time">
                                        {formatTime(article.publishedAt)}
                                    </span>
                                </div>

                                {expandedNews === index && article.content && (
                                    <div className="news-content-full">
                                        <p>{article.content}</p>
                                        {article.url && (
                                            <a
                                                href={article.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="read-more-link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Read full article →
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            <button
                                className="expand-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedNews(expandedNews === index ? null : index);
                                }}
                            >
                                {expandedNews === index ? '−' : '+'}
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="news-footer">
                <div className="update-info">
                    <span className="update-text">
                        Updates every 15 mins • {news.length} articles
                    </span>
                    <button
                        className="refresh-btn"
                        onClick={() => window.location.reload()}
                        title="Refresh news"
                    >
                        ↻
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsWidget;