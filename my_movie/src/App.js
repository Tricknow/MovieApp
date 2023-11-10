import React from "react";
import Home from "./routes/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Nowplaying from './routes/Nowplaying'
import TopRated from './routes/TopRated';
import Popular from './routes/Popular';

function App(){
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route element={<About/>} path='/:movieid'></Route>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Nowplaying/>} path='/now'></Route>
      <Route element={<TopRated/>} path='/top'></Route>
      <Route element={<Popular/>} path='/popular'></Route>


    </Routes>
    </BrowserRouter>
  )
}

export default App;
