import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Empresas from '../pages/Empresas';
import Contato from '../pages/Contato';
import Home from '../pages/Home';

function Navbar() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresas">Empresa</Link></li>
        <li><Link to="/contatos">Contato</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/contatos" element={<Contato />} />
      </Routes>
    </Router>
  )
}

export default Navbar