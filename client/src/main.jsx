import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import App from './App.jsx';
import { Sidebar } from './components/index.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='search' element={<Sidebar />} />
    </Route>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
