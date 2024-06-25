import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import '../App.css';


export const LoginPage = () => {
    return (
        <div>
            <div>
            <h1>Login</h1>
            </div>
                <div>
                !-- Create a form with a username and password field -->
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
        </div>
    );
};
