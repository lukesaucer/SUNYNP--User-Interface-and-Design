import React from 'react';
import { fetchData } from '../../main';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

export const LoginPage = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const { username, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData("/user/login", user, "POST")
            .then(data => {
                if (!data.message) {
                    console.log(data);
                    navigate("/profile");
                } else {
                    console.error(data.message);
                }
            })
    }

    return (
        <div className="login-container vh-100 d-flex align-items-center justify-content-center">
            <div className="login-div bg-white shadow-lg p-3 border border-4 border-info rounded-lg rounded d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-dark-navy font-weight-bold mb-3">Login</h1>
                <form className="form-inline d-flex flex-column align-items-center" onSubmit={onSubmit}>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="mr-3 rounded border-info mb-3"
                        placeholder="Username"
                        onChange={onChange}
                        value={username}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="mr-3 rounded border-info mb-3"
                        placeholder="Password"
                        onChange={onChange}
                        value={password}
                        required
                    />
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-lg bg-dark-navy">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;