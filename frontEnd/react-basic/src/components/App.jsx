import React from 'react';
import '../style/App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Secret from './Secret';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/secret' element={<Secret/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
