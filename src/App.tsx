import React from 'react';
import logo from './logo.svg';
import FormularioPrincipal from './components/formularioPrincipal';
import './app.css'
import SideBar from './components/sideBar/sideBar';
import { Route, Routes } from 'react-router-dom';
import TabelaFuncionarios from './components/TabelaFuncionarios';
import Step1PersonalInfo from './components/Step1PersonalInfo';


function App() {
  return (
      <div className="app" style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<FormularioPrincipal />} />
          <Route path="/colaboradores" element={<TabelaFuncionarios />} />
          <Route path="/cadastrar-colaborador" element={<FormularioPrincipal />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
