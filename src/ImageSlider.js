import React, { useState } from "react";

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
    const buttonStyles={
        width:"70px",
        height:"20px"
    };

    return(
        images.length > 0 && (
            <div>
                <button onClick={slideLeft}  style={buttonStyles}>{"Previous"}</button>
                <br></br>
                <img src={images[index]} alt={index} />
                <br></br>
                <button onClick={slideRight} style={buttonStyles}>{"Next"}</button>
            </div>
        )
    );
};

export default ImageSlider;