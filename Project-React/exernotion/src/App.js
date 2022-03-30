import React from 'react';

import Navbar from './Component/Navbar/Navbar';
import ActivityForm from './Component/ActivityForm/ActivityForm';
import Footer from './Component/Footer/Footer';

import './App.css';


const App = () => {
  return (<div>
      <Navbar/>
      <ActivityForm/>   
      <Footer/> 
      </div>
  );
};



export default App;
