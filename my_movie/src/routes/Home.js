import React from "react";
import axios from 'axios'
import { Now_playing_url } from "../components/Env";
import { topRated_playing_url } from "../components/Env";
import { popular_url } from "../components/Env";
import Movie from "../components/Movie";
import './Home.css';
import SeeMore from "../components/SeeMore";


class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    popular_movies: [],
    topRated_movies: []
  };

  getNowMovies = async () => {
    const {
      data: {results},
    }  = await axios.get(Now_playing_url);
    //console.log(results);
    this.setState({movies:results, isLoading:false});
  };
  getPopularMovies = async () => {
    const {
      data : {results},
    } = await axios.get(popular_url);
    //console.log(results);;
    this.setState({popular_movies:results, isLoading:false});
  };
  getTopRatedMovies = async () => {
    const {
      data : {results},
    } = await axios.get(topRated_playing_url);
    //console.log(results);;
    this.setState({topRated_movies:results, isLoading:false});
  };
  

  componentDidMount() {
    this.getNowMovies()
    this.getPopularMovies()
    this.getTopRatedMovies()
  };

  
  render(){
    const { isLoading, movies, popular_movies, topRated_movies} = this.state;
    return (
      
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="nowPlaying_box">
              <SeeMore
                category = "Now Playing Movies"
                address = "/now"/>
            <div className="movies">
            {movies.map((movie)=> {
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

          <div className="nowPlaying_box">
          <SeeMore
                category = "Top Rated Movies"
                address = "/top" />
            <div className="movies">
            {topRated_movies.map((movie)=> {
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

          <div className="nowPlaying_box">
            <SeeMore
            category = "Popular Movies"
            address = "/popular"/>
            
            <div className="movies">
            {popular_movies.map((movie)=> {
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

        </div>

        

      
      )}
      </section>
    );
  }
}

export default Home;
