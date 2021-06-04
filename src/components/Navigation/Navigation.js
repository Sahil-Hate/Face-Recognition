import React from 'react';

const Navigation = ({onRouteChange,isSignedIn}) => {
    if(isSignedIn === false){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
                <p></p>
            </nav>
        )
    }

    else{
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
                <p className="f3 link underline georgia dim black pa3 pointer"
                onClick={() => onRouteChange('Signin') }
                >
                Sign Out!</p>
            </nav>
        );
    }
    
}

export default Navigation;