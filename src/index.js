import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import App from './App';
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path = "/" element={<App />} >
                <Route path = "/" element={<Home />} />
                <Route path = "/about" element={<About />} />
                <Route path="/movie-detail" element={<Detail />} />
                <Route path="/movie-detail/:id" element={<Detail />} />
            </Route>
        </Routes>
    </BrowserRouter>
    // <App /> //컴포넌트
);