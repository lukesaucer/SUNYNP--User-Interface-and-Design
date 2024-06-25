import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import '../App.css';

export const ProfilePage = () => {
    return (
        <div>
            <div>
            <h1>Profile</h1>
            </div>
            <div>
                <p>Username: !-- Display the username of the currently logged in user --</p>
                <p>Email: !-- Display the email of the currently logged in user --</p>
                <button>Logout</button>
            </div>
        </div>
    );
};

