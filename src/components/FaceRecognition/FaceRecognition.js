import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) =>{
    return(
        <div className="centered">
            <div style={{margin:'10px'}} className=" absolute mt2">
                <img id='inputImage' src={imageURL} alt="" width='500px' height='auto'></img>
                <div id="box" style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;