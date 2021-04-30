import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import Login from './components/Login';
import Profile from './components/Profile';

const pages = {
  map: <Map/>,
  login: <Login/>,
  profile: <Profile/>
};


function App() {
  const [nav, setNav] = useState('map');

  const goToPage = (page) => {
    setNav(page)
  };
  return (
    <div className="App">
      <Header goToPage={goToPage}/>
      {pages[nav]}
    </div>
  );
}

export default App;
