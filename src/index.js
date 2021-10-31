import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import "mapbox-gl/dist/mapbox-gl.css";
import DatagenContext from './components/context/DatagenContext';



ReactDOM.render(
  
  <React.StrictMode>
    <DatagenContext>
    <App />
    </DatagenContext>
  </React.StrictMode>,
  document.getElementById('root')
  
);

