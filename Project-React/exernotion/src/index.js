import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddActivity from './Page/AddActivity';
import ActivityHistory from './Page/ActivityHistory';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<AddActivity/>} />
           <Route path="activity-history" element={<ActivityHistory/>}/>
         </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


