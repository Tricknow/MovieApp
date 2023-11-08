import React from "react";
import Home from "./routes/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Nowplaying from './routes/Nowplaying'

function App(){
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route element={<About/>} path='/:movieid'></Route>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Nowplaying/>} path='/now'></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
