
import './App.css';

import Patientform from './Components/FormData';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Table from './Components/View';

function App() {
  return (
    <div style={{backgroundColor:"lightgray"}}>
   
    <BrowserRouter>
    <Routes>
  
      <Route path='/' element={<Patientform/>} />
      <Route path='/getdetail' element={<Table />} />
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
