export const LoginPage = () => {
    return (
        <div className="login-container vh-100 d-flex align-items-center justify-content-center">
            <div className="login-div bg-white shadow-lg p-3 border border-4 border-info rounded-lg rounded d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-dark-navy font-weight-bold mb-4">Login</h1>
                <form className="form-inline d-flex flex-column align-items-center">
                    <input type="text" id="username" name="username" className="mr-3 rounded border-info mb-3" placeholder="Username" />
                    <input type="password" id="password" name="password" className="mr-3 rounded border-info mb-4" placeholder="Password" />
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-lg bg-dark-navy">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};