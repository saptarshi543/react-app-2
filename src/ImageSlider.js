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

    const imgStyles={
	    width:"100px",
        height:"70px"
    };
    const styleForResults={
	    width:"100%",
        height:"auto"
    };
    return(
        images.length > 0 && (
            <div>
                <img style={imgStyles} onClick={slideLeft} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.b2z2PHydYg2VbTD2uCFsygHaHa%26pid%3DApi&f=1" alt="Previous" />
                <br></br>
                <img style={styleForResults} src={images[index]} alt={index} />
                <br></br>
                <img style={imgStyles} onClick={slideRight} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Fnext-button-clipart-9.png&f=1&nofb=1" alt="Next" />
            </div>
        )
    );
};

export default ImageSlider;
