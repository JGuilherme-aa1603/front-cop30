import React from 'react';
import Header from './Header/Header.tsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.tsx';
import Sobre from './Pages/Sobre/Sobre.tsx';
import Culinaria from './Pages/Culinaria/Culinaria.tsx';
import PontosTuristicos from './Pages/PontosTuristicos/PontosTuristicos.tsx';
import Sugestoes from './Pages/Sugestoes/Sugestoes.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/culinaria" element={<Culinaria />} />
        <Route path="/pontos-turisticos" element={<PontosTuristicos />} />
        <Route path="/sugestoes" element={<Sugestoes/>} />
      </Routes>
    </div>
  );
}

export default App;
