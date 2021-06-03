import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return(
        <div>
            <p className="georgia">{`This magic brain will detect your face`}</p>
            <div className="container">
                <div className="pa4 shadow-5 br3">
                    <input className="f5 pa1 w-60 center ba" type="text" placeholder="Enter the URL here!" onChange={onInputChange}></input>
                    <button className="f5 w-10 dib dark-blue pa1 bg-light-blue shadow-3 grow" type="submit" style={{marginLeft: '5px'}} onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;