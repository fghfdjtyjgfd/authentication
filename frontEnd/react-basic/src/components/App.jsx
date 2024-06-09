import React from 'react';
import '../style/App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import About from './about/About';
import Secret from './Secret';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Page404 from './Page404';
import Author from './about/author';
import Company from './about/company';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/secret' element={<Secret/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<Page404/>}></Route>
          <Route path='/about/author' element={<Author/>}></Route>
          <Route path='/about/company' element={<Company/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
