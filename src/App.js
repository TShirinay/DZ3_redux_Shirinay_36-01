import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import MainPage from "./pages/MainPage/MainPage";
import UserPage from "./pages/UserPage/UserPage";
const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/users" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;