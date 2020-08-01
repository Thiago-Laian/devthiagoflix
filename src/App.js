import React from 'react';
import Header from './Header'
import './App.css';

function App() {
  return (
    <Header name="Thiago dev" links = {["Sobre", "Contato", "Canais", "Login"]}></Header>
  );
}

export default App;
