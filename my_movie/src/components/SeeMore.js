import React from "react";
import { useNavigate } from "react-router-dom";

function SeeMore(props){
    const navigate = useNavigate();
    const {category}= props
    return (
        <div className="nowPlaying_text">
            <p> Now Playing
                {/* <button type="button" onClick={()=>alert("why!!")} className="button"> */}
                    {/* <span>더 보기</span> */}
                {/* </button>  */}
                <button type="button" onClick={ ()=> {navigate(category)}} className="button">
                    <span>더 보기</span>
                </button>
            </p>
      </div>
    );
}

export default SeeMore;