import React from "react";
import axios from 'axios'
import { topRated_playing_url } from "../components/Env";
import NowMovies from "../components/NowMovies";
import './Nowplaying.css';



class Nowplaying extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {results},
    }  = await axios.get(topRated_playing_url(1));
  //  console.log(results);
    this.setState({results, isLoading:false});
  };

  componentDidMount() {
    this.getMovies()
  };

  

  render(){
    const { isLoading, results } = this.state;
    
    return (
    <section className="now_container">
      {isLoading ? (
        <div className="now_loader">
          <span className="now_loader__text">Loading...</span>
        </div>
      ) : (
        <div>
          <p className="nowPlaying_text">
            평가 순 영화 목록
          </p>
          <div className="now_movies">
          {results.map((movie)=> {
            //console.log(movie);
            return(
              <NowMovies
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

export default Nowplaying;
