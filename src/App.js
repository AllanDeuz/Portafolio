import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Presentacion from './components/Presentacion';
import Contacto from './components/Contacto';
import MasInformacion from './components/MasInformacion';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Presentacion />} />
        <Route path="/contactar" element={<Contacto />} />
        <Route path="/saberes" element={<MasInformacion />} />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
