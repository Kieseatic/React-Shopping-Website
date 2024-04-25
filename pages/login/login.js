import React, { useState } from 'react';
import axios from 'axios';

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

            <style jsx>{`
                .login-container {
                    width: 400px;
                    margin: 50px auto;
                    padding: 30px;
                    border-radius: 5px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                    background-color: #f9f9f9;
                }

                .login-container h2 {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #333;
                }

                .input-group {
                    margin-bottom: 20px;
                }

                .input-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                    color: #666;
                }

                .input-group input {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                }

                .error-message {
                    color: #ff3333;
                    margin-bottom: 10px;
                }

                button {
                    width: 100%;
                    padding: 12px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default Login;
