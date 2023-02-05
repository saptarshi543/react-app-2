import React, { useState } from "react";
import styleR from './styleResults.css';
const ImageSlider=({images})=>{
    const [index,setIndex]=useState(0);

    const slideRight=()=>{
        setIndex((index+1) % images.length);
    };
    const slideLeft=()=>{
        const nextIndex=index-1;
        if(nextIndex<0){
            setIndex(images.length -1);
        }else{
            setIndex(nextIndex);
        }
    };


    return(
        images.length > 0 && (
            <div>
<button onClick={slideLeft}>Previous</button>
                <br></br>
                <img class="final_results" style={styleR} src={images[index]} alt={index} />
                <br></br>
<button onClick={slideRight}>Next</button>

            </div>
        )
    );
};

export default ImageSlider;
