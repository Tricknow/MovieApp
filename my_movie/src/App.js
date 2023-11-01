import React from "react";
import { apiKey } from "./apiKey";
import AxiosMovie from './AxiosMovie';

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

const App = () => {
  return (
    <div>
      <h1>영화평점 웹 서비스 </h1>
      <AxiosMovie url={url} />
    </div>
  )
};

export default App;
