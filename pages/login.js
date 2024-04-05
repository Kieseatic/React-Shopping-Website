import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.module.css'; // Import CSS file for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { username, password });
            console.log("Login successful:", response.data);
            // Handle successful login (e.g., store token, redirect)
        } catch (error) {
            console.error("Login error:", error.response.data);
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
