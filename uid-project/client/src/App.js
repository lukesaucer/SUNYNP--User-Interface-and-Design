import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {RegisterPage} from "./pages/RegisterPage";
import {ProfilePage} from "./pages/ProfilePage";
import {LoginPage} from "./pages/LoginPage";


function App() {
    return (
        <div>
            <NavBar />
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
    );
}

export default App;