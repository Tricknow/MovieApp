import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { apiKey } from "../components/Env";
import './About.css';

function About(){
    const param = useParams()
    const detailUrl = `https://api.themoviedb.org/3/movie/${param.movieid}?language=ko-ko&api_key=${apiKey}`;
    const [detail, setDetail] = useState("")
    useEffect(() => {
        axios({
            method: "GET",
            url: detailUrl
        })
        .then((res) => {           
            //console.log(res)
            setDetail(res.data)
        })
    },[])

    //const g_detail = detail.genres
    //console.log(detail?.genre[0])

    return(
        <div class='about'>
            <div class='poster'>
            <img
                src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}
                alt={detail.title}
                title={detail.tagline} />
            </div>
            <div class="detail">
                <div class="detail_title">
                    <h3>{detail.title} ({detail.original_title})</h3>
                    <h5>origin Country : detail.production_countries[0].name </h5>

                </div>
                <div class="detail_subClass">
                    <span>⭐{detail.vote_average} </span>
                    <span>▪ </span>
                    <span>{detail.release_date} </span>
                    <span>▪ </span>
                    <span>{detail.runtime}분 </span>
                    <span>▪ </span>
                    <span>genres[0].name </span>
                </div>
                <p class="detail_overview">{detail.overview}</p>
            </div>
            <div>
                <div><img src={`https://image.tmdb.org/t/p/original/${detail.production_companies}`} class="sc-fznMAR gSVBBi"/>detail.production_companies[0].name</div>
                
            </div>
        </div>
    ) 
}

export default About