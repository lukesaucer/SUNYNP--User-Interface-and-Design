import './App.css';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {RegisterPage} from "./components/pages/RegisterPage";
import {ProfilePage} from "./components/pages/ProfilePage";
import {LoginPage} from "./components/pages/LoginPage";
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<NavBar />}>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Route>
                    </Routes>
                </UserProvider>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;