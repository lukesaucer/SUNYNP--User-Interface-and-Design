import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {RegisterPage} from "./components/pages/RegisterPage";
import {ProfilePage} from "./components/pages/ProfilePage";
import {LoginPage} from "./components/pages/LoginPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavBar />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;