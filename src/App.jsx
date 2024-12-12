import React from "react";
// import ReactDom from 'react-dom-client';
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <>
      <div className="flex gap-10">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
