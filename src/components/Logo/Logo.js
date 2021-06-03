import React from 'react';
import Tilt from 'react-tilt';
import image from './removed-face.png';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 160, width: 150 }} >
            <div className="Tilt-inner">
                <img src={image} alt="logo" style={{paddingBottom:'10px'}}></img>
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;