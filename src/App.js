import React from 'react';
import { BrowserRouter as Router, Navigate  ,Route, Routes } from "react-router-dom";
import Login from './Componentes/Login.js';
import Menu from './Componentes/Menu.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
