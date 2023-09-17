import Home from './components/home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Manage from './components/manage-data';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/manage-data' element={<Manage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
