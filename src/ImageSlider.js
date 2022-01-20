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

    return(
        images.length > 0 && (
            <div>
                <button onClick={slideLeft}>{"<"}</button>
                <img src={images[index]} alt={index} />
                <button onClick={slideRight}>{">"}</button>
            </div>
        )
    );
};

export default ImageSlider;