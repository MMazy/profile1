import React from 'react';
import './Home.css';

const Home =() =>{
    return(
    <div className="bg-black-80 pb5 pb6-m pb7-l bg-image " width="atuo" height="100%">
        <div className ="center" >
            
            <div className="tc-l mt4 mt5-m mt6-l ph3 ">
                <h1 className="home-title f1-l fw2 white-90 mb0 lh-title">Hello, my name <span className="orange">Mina Mazloomi</span>.</h1>
                <h1 className="home-title fw1 f1 white-80 mt3 mb4">I'm the full-stack web developer.</h1>
                <a className="f4 no-underline grow dib v-mid bg-orange white ba b--white ph3 pv2 mb3 hover-dark-gray" href="/">Know more</a>
                <span className="dib v-mid ph3 white-70 mb3"></span>
                <a className="f4 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3 hover-light-red" href="">My works</a>
            </div>
        
      </div>
    </div>
    );

}

export default Home;
