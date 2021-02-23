import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import Repositories from './Pages/Repositories/Repositories';

ReactDOM.render(
  <React.StrictMode>
    <App title="repos"/>
  </React.StrictMode>,
  document.getElementById('root')
);
