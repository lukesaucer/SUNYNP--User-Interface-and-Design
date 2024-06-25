import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../App';
import '../../App.css';

export const ProfilePage = () => {
    return (
        <div className="login-container vh-100 d-flex align-items-center justify-content-center">
            <div className="login-div bg-white shadow-lg p-3 border border-4 border-info rounded-lg rounded d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-dark-navy font-weight-bold mb-3">Profile</h1>
                <form className="form-inline d-flex flex-column align-items-center">
                    <p className="mb-3"><strong>Username:</strong></p>
                    <p className="mb-3"><strong>Email:</strong></p>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-lg bg-dark-navy">Logout</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

