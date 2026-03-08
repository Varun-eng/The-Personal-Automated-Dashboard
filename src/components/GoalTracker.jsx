import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const GoalTracker = () => {
    const [goals, setGoals] = useLocalStorage('dashboard-goals', []);
    const [newGoal, setNewGoal] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed

    const addGoal = (e) => {
        e.preventDefault();
        if (!newGoal.trim()) return;

        const goal = {
            id: Date.now(),
            text: newGoal,
            completed: false,
            createdAt: new Date().toISOString()
        };

        setGoals([...goals, goal]);
        setNewGoal('');
    };

    const toggleGoal = (id) => {
        setGoals(goals.map(goal =>
            goal.id === id ? { ...goal, completed: !goal.completed } : goal
        ));
    };

    const deleteGoal = (id) => {
        setGoals(goals.filter(goal => goal.id !== id));
    };

    const filteredGoals = goals.filter(goal => {
        if (filter === 'active') return !goal.completed;
        if (filter === 'completed') return goal.completed;
        return true;
    });

    const stats = {
        total: goals.length,
        completed: goals.filter(g => g.completed).length,
        active: goals.filter(g => !g.completed).length
    };

    return (
        <div className="goals-content">
            <h3>Daily Goals</h3>

            <form onSubmit={addGoal} className="add-goal-form">
                <input
                    type="text"
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                    placeholder="Add a new goal..."
                    maxLength="50"
                />
                <button type="submit" disabled={!newGoal.trim()}>Add</button>
            </form>

            <div className="goals-stats">
                <span>Total: {stats.total}</span>
                <span>Active: {stats.active}</span>
                <span>Completed: {stats.completed}</span>
            </div>

            <div className="goals-filter">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={filter === 'active' ? 'active' : ''}
                    onClick={() => setFilter('active')}
                >
                    Active
                </button>
                <button
                    className={filter === 'completed' ? 'active' : ''}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>

            <ul className="goals-list">
                {filteredGoals.map(goal => (
                    <li key={goal.id} className={goal.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => toggleGoal(goal.id)}
                        />
                        <span className="goal-text">{goal.text}</span>
                        <button
                            className="delete-btn"
                            onClick={() => deleteGoal(goal.id)}
                            aria-label="Delete goal"
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>

            {filteredGoals.length === 0 && (
                <p className="no-goals">No goals to show. Add one above!</p>
            )}
        </div>
    );
};

export default GoalTracker;