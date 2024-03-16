import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/index.css';
import 'aos/dist/aos.css';

import Routers from './routes/Index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
);
