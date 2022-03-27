import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../pages/App';
import Task from '../pages/Task';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/task" element={ <Task /> } />
        <Route path="/task/:id" element={ <Task /> } />
      </Routes>
    </BrowserRouter>
  )
}
