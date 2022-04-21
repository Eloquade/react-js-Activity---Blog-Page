import React, {} from 'react';
import './App.css';
import HomePage from './book/homepage';
import Articlelist from './book/articlelist';
import Article from './book/article';
import Aboutpage from './book/aboutpage';
import { Route, Routes } from 'react-router';
import Navbar from './navbar';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Aboutpage" element={<Aboutpage/>} />
          <Route path="/Articlelist" element={<Articlelist/>} />
          <Route path="/article/:name" element={<Article/>} />
          

      </Routes>
      
    </div> 
    

  );
}

export default App;
