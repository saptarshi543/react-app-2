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

    const imgStyles={
	    width:"100px",
        height:"70px"
    };

    return(
        images.length > 0 && (
            <div>
                <img style={imgStyles} onClick={slideLeft} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F442%2F785%2Foriginal%2Fprevious-vector-icon.jpg&f=1&nofb=1" alt="Previous" />
                <br></br>
                <img class="final_results" style={styleR} src={images[index]} alt={index} />
                <br></br>
                <img style={imgStyles} onClick={slideRight} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Fnext-button-clipart-9.png&f=1&nofb=1" alt="Next" />
            </div>
        )
    );
};

export default ImageSlider;
