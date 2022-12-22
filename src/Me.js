import React from "react";
function Me(){
const style_m={
	backgroundColor: '#2995e7',
	padding:"20px"
};
const text={
	backgroundColor:"#f1c232"
}
	return(
        <div style={style_m} className="text">
            <h4>my E-mail: saptarshichatterjee543@gmail.com</h4>
        <a style={text} href='https://github.com/saptarshi543'>my github account</a>
        <br></br>
        <p1>Wonder why this site does not have a nice domain name?
            That's because i am too poor to afford a site name.
            So <a style={text} href="https://www.buymeacoffee.com/sap543">pleasse support me here.</a>
        </p1>
        </div>
    )
}
export default Me;
