import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { apiKey } from "../components/Env";
import './About.css';


function About(){
    const param = useParams()
    const detailUrl = `https://api.themoviedb.org/3/movie/${param.movieid}?language=ko-ko&api_key=${apiKey}`;
    const [detail, setDetail] = useState("")
    const [genre, setGenre] = useState("")
    const [country, setCountry] = useState("")
    const [company, setCompany] = useState("")
    useEffect(() => {
        axios({
            method: "GET",
            url: detailUrl
        })
        .then((res) => {           
            //console.log(res.data)
            setDetail(res.data)
            setGenre(res.data.genres)
            setCountry(res.data.production_countries)
            setCompany(res.data.production_companies)
        })
    },[])

    useEffect(() => {
        //console.log(genre)
    }, [genre]
    )

    useEffect(() => {
        //console.log(country)
    }, [country]
    )

    useEffect(() => {
        //console.log(company)
    }, [company]
    )


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
                    <h5>Origin country :{country.length >=1 ? country.map((e)=> (<span> [{e.name}] </span>)) : country}</h5>
                </div>
                <div class="detail_subClass">
                    <span role="img" aria-label="star">⭐{detail.vote_average} </span>
                    <span>▪ </span>
                    <span>{detail.release_date} </span>
                    <span>▪ </span>
                    <span>{detail.runtime}분 </span>
                    <span>▪ </span>
                    {genre.length >=1 ? genre.map((e)=> (<span> [{e.name}]</span>)) : genre}
                </div>
                <p class="detail_overview">{detail.overview}</p>
            </div>
            <div>
                <div>제작사 ↓ 
                    {company.length >=1 ? company.map((e)=> (<h5>{e.name} from {e.origin_country}</h5>)) : company}
                </div>
                
            </div>
        </div>
    ) 
}

export default About