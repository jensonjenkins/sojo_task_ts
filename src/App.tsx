import React from 'react';
import './globals.css';
import NavBar from './components/Navbar/NavBar';
import Pages from './components/Pages/pages';

function App() {
  return (
    <>
    <NavBar />
    <div className='MainContainer'>
      <Pages />     
    </div>
  </>
  );
}

export default App;
