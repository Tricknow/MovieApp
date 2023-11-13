import React from "react";
import { useNavigate } from "react-router-dom";

function SeeMore(props){
    const navigate = useNavigate();
    const {category, address}= props
    return (
        <div className="nowPlaying_text">
            <p> {category}
                {/* <button type="button" onClick={()=>alert("why!!")} className="button"> */}
                    {/* <span>더 보기</span> */}
                {/* </button>  */}
                <button type="button" onClick={ ()=> {navigate(address)}} className="button">
                    <span>더 보기</span>
                </button>
            </p>
      </div>
    );
}

export default SeeMore;