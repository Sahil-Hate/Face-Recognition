import React from 'react';

const Signin = ({onRouteChange}) => {
    return(
        <main className="pa4 black-80">
            <form className="measure center ba pa3 shadow-3">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 baskerville ">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6 baskerville " for="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6 baskerville " for="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" 
                onClick={() => onRouteChange('home')} />
                </div>
                <div className="lh-copy mt3">
                <p className="f4 link dim black db"
                onClick={() => onRouteChange('Register')}
                >Register</p>
                </div>
            </form>
        </main>
    );
}

export default Signin;