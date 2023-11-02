import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { apiKey } from "../components/Env";

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
            console.log(res)
            setDetail(res.data)
            
        })
    })
    return <span>{detail.title}</span>
}

export default About