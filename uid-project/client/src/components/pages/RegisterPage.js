import React from 'react';
import { fetchData } from '../../main';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import UserContext from "../../context/UserContext";
import { useContext } from 'react';
export const RegisterPage = () => {
    const navigate = useNavigate();

    const { user, updateUser } = useContext(UserContext);

    const { username, email, password } = user;

    const onChange = (e) => updateUser(e.target.name, e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData("/user/register",
            {
                username,
                password
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    console.log(data);
                    updateUser("authenticated", true);
                    navigate("/login");
                } else {
                    console.error(data.message);
                }
            })
        }

    return (
        <div className="login-container vh-100 d-flex align-items-center justify-content-center">
            <div className="login-div bg-white shadow-lg p-3 border border-4 border-info rounded-lg rounded d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-dark-navy font-weight-bold mb-3">Register</h1>
                <form onSubmit={onSubmit} className="form-inline d-flex flex-column align-items-center">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control mr-3 rounded border-info mb-3"
                        placeholder="Username"
                        onChange={onChange}
                        value={username}
                        required
                    />
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control mr-3 rounded border-info mb-3"
                        placeholder="Email"
                        onChange={onChange}
                        value={email}
                        required
                    />
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control mr-3 rounded border-info mb-3"
                        placeholder="Password"
                        onChange={onChange}
                        value={password}
                        required
                    />
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-lg bg-dark-navy" value="Register">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
