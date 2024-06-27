import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import App from './App.jsx';
import { Search } from './components/index.js';
import { MainScreen } from './components'
import { songsLoader } from './loaders';
import { randomSongs } from './constants.js';
import { routeConstants } from './routeConstants.js';

const randomIndex = Math.floor(Math.random() * randomSongs.length);
const song = randomSongs[randomIndex];
const route = routeConstants;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={route.homeRoute.path} element={<App />} >
      <Route path={route.mainRoute.path} element={<MainScreen />} loader={() => songsLoader(song)} />
      <Route path={route.searchRoute.path} element={<Search />} loader={() => songsLoader(song)} />
    </Route>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
