import React from 'react';
import App from '../App';
import '../App.css';

export const RegisterPage = () => {
    return (
        <div>
            <div>
            <h1>Register</h1>
            </div>
            <div>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Register</button>
            </div>
        </div>
    );
}

