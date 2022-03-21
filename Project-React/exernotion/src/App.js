import React, { useState } from 'react';


import Navbar from './Component/Navbar/Navbar';
import Activity from './Component/Activity/Activity';
import Footer from './Component/Footer/Footer';

import './App.css';


const App = () => {
  return (<div>
      <Navbar/>
      <Activity/>   
      <Footer/> 
      </div>
  );
};



export default App;
