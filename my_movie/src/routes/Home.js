import React from "react";
import axios from 'axios'
import { Now_playing_url } from "../components/Env";
import Movie from "../components/Movie";
import './Home.css';



class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {results},
    }  = await axios.get(Now_playing_url);
  //  console.log(results);
    this.setState({results, isLoading:false});
  };

  componentDidMount() {
    this.getMovies()
  };

  render(){
    const { isLoading, results } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="nowPlaying_box">
          <p className="nowPlaying_text">
            현재 상영중 
            <button type="button" className="button" onClick={alert('hi')}>
              <span>더 보기</span>
            </button>
          </p>
          <div className="movies">
          {results.map((movie)=> {
            //console.log(movie);
            return(
              <Movie
                key = {movie.id}
                id = {movie.id}
                release_date = {movie.release_date}
                title = {movie.title}
                overview = {movie.overview}
                poster_path = {movie.poster_path}
                vote_average={movie.vote_average}
                />
            );
          })}
          </div>
        </div>
      )}
      </section>
    );
  }
}

export default Home;
