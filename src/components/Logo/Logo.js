import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import thinking from './thinking.png'

const Logo = () => {

    return (
        <div className = 'ma4 mt0'>
            <Tilt className ="Tilt br2 shadow-2 mw5">
                <div className = 'Tilt-inner' style={{ height: '200px', width: '250px'}}>
                    <img style={{paddingTop: '40px'}} alt='logo' src={thinking}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;