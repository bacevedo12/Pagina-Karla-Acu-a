
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import NavBarKarla from './layouts/Navbar';
import PaginaSanatorio from './components/PaginaSanatorio';
import NuestrosTratamientos from './components/NuestrosTratamientos';
import NuestraClinica from './components/NuestraClinica';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
  
    <Route path="/" element={<NavBarKarla />}>
      <Route index element={<Inicio />}/>
      <Route path='NuestraClinica' element={<NuestraClinica />}/>
      <Route path='SobreMi' element={<SobreMi />}/>
      <Route path='NuestrosTratamientos' element={<NuestrosTratamientos />}/>
      <Route path='Contacto' element={<Contacto />}/>
      <Route path='PaginaSanatorio' element={<PaginaSanatorio/>}></Route>
  
    
      <Route path='*' element={ <Navigate replace to="/"/>}/>
    </Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
