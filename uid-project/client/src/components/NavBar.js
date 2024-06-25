import { Outlet, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                    <Link className="navbar-brand" to="/">UIP Social Media Website</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav pl-2">
                            <Link className="nav-item nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/register">Register</Link>
                            <Link className="nav-item nav-link" to="/login">Login</Link>
                        </div>
                    </div>
                </nav>

        <Outlet />
    </div>
    );
}

export default NavBar;