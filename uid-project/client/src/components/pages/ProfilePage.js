import React from 'react';
import UserProfile from '../UserProfile';
import UserPosts from '../UserPosts';
import '../../App.css';

export const ProfilePage = () => {
    const username = "User's Name"; // Replace this with the actual username
    return (
        <div className="flex flex-column mt-4 mb-4">
            <UserProfile username={username} />
            <UserPosts className="mt-4" />
        </div>
    );
}

export default ProfilePage;