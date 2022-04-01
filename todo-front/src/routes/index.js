import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../pages/App';
import Task from '../pages/Task';
import QrCode from '../pages/QrCode';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/task" element={ <Task /> } />
        <Route path="/task/:id" element={ <Task /> } />
        <Route path="/qrcode" element={ <QrCode /> } />
      </Routes>
    </BrowserRouter>
  )
}
