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
    
    // const buttonStyles={
    //     display:"hidden",
    //     width:"100px",
    //     height:"200px"
    // };

    const imgStyles={
        width:"100px",
        height:"70px"
    };

    return(
        images.length > 0 && (
            <div>
                <img style={imgStyles} onClick={slideLeft} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbggreensource.org%2Fwp-content%2Fuploads%2F2018%2F06%2FPrevious-Button-Transparent-Background.png&f=1&nofb=1" alt="Previous" />
                <br></br>
                <img src={images[index]} alt={index} />
                <br></br>
                <img style={imgStyles} onClick={slideRight} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Fnext-button-clipart-9.png&f=1&nofb=1" alt="Next" />
            </div>
        )
    );
};

export default ImageSlider;