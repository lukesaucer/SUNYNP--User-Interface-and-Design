import React, { useState, useEffect } from 'react';

export const PostTimeline = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('https://your-api-endpoint.com/archived-posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
            <div className="post-timeline-container flex items-center justify-center">
                <h2 className="text-center mb-3"><strong>Post Archive</strong></h2>
                {posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
    );
};

export default PostTimeline;