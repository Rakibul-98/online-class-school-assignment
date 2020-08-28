import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Main/Shop';

function App() {
  return (
    <div className="text-danger">
      <p className='title'>Welcome to free Online class school</p>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
