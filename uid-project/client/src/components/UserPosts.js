export const UserPosts = () => {
    return (
        <div className="profile-container mt-3 flex flex-wrap items-start justify-start w-full">
            <div className="profile-div flex flex-wrap items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <form>
                    <div className="post w-full mb-3">
                        <h2 className="text-center mb-3"><strong>Post Title</strong></h2>
                        <div className="content-container w-full d-flex flex-wrap items-center mb-3">
                            <textarea className="text-left border-0" placeholder="Write your post content here..."
                                      style={{width: '100%', height: 'auto', objectFit: 'contain'}}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Submit</button> {/* Add margin-top */}
                    </div>
                </form>
            </div>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    );
};

export default UserPosts;