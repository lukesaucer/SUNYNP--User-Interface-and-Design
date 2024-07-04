import React from 'react';
import '../App.css';

export const UserProfile = ({ username }) => {
    return (
        <div className="profile-container flex flex-wrap items-start justify-start">
            <div className="profile-div flex flex-wrap items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <form className="d-flex flex-wrap flex-column align-items-start">
                    <h1 className="text-center mb-3"><strong>Hello {username}!</strong></h1>
                    <div className="flex flex-wrap items-center mb-3">
                        <div className="image-container flex flex-wrap">
                            <img src="https://picsum.photos/200/300" alt="Profile"
                                 style={{width: '100%', height: 'auto', objectFit: 'contain'}}/>
                        </div>
                        <div>
                            <p className="text-left mb-3"><strong>Username:</strong></p>
                            <p className="text-left"><strong>Email:</strong></p>
                        </div>
                    </div>
                </form>
            </div>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    );
}

export default UserProfile;