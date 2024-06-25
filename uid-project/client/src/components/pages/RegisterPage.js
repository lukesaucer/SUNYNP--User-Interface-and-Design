import React from 'react';
import App from '../../App';
import '../../App.css';

export const RegisterPage = () => {
    return (
        <div className="login-container vh-100 d-flex align-items-center justify-content-center">
            <div className="login-div bg-white shadow-lg p-3 border border-4 border-info rounded-lg rounded d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-dark-navy font-weight-bold mb-3">Register</h1>
                <form className="form-inline d-flex flex-column align-items-center">
                    <input type="text" id="username" name="username" className="mr-3 rounded border-info mb-3" placeholder="Username" />
                    <input type="email" id="email" name="email" className="mr-3 rounded border-info mb-3" placeholder="Email" />
                    <input type="password" id="password" name="password" className="mr-3 rounded border-info mb-3" placeholder="Password" />
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-lg bg-dark-navy">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

