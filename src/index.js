import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from './components/Paginas/Inicio';
import Promociones from './components/Paginas/Promociones';
import NuevosProd from './components/Paginas/NuevosProd';
import TodosProd from './components/Paginas/TodosProd';
import Nosotros from './components/Paginas/Nosotros';
import Clientes from './components/Paginas/Clientes';
import Soporte from './components/Paginas/Soporte';
import Blog from './components/Paginas/Blog';
import Afiliados from './components/Paginas/Afiliados';
import Contenido from './components/Paginas/Contenido';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path ="/" element={<App/>}/>
      <Route path = "/inicio" element = {<Inicio/>}/>
      <Route path = "/promociones" element={<Promociones/>}/>
      <Route path = "/nuevos+productos" element={<NuevosProd/>}/>
      <Route path = "/todos+los+productos" element={<TodosProd/>}/>
      <Route path = "/nosotros" element={<Nosotros/>}/>
      <Route path = "/cliente" element={<Clientes/>}/>
      <Route path = "/soporte" element={<Soporte/>}/>
      <Route path = "/blog" element={<Blog/>}/>
      <Route path = "/afiliados" element={<Afiliados/>}/>
      <Route path = "/contenido" element={<Contenido/>}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
