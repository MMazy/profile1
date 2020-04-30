
import React from 'react';
import Mprofile from './Mprofile.jpg'

const About = () => {
    return(
        <div id="about" >
            <div id="container" className="about-bg" >
                <div id="header" className="fl w-100 ">
                    <h1>ABOUT ME </h1>
                </div>
                <div class="dt center pv4 pv5-m pv6-ns">
                    
                    {/* <div class="dtc v-btm">
                        <article className="br3  ba-orange round dark-gray b--black-10 mv4 w-100  w-25-l mw6 shadow-5 center">
                                    <img id='inputimage'  alt='' src={Mprofile} width='500px' height='auto'/>
                                </article>
                        </div>
                    <div class="dtc v-btm pl3">
                        <p class="lh-copy mv0">
                        This text is aligned to the bottom, no matter what the height of the image is.
                        </p>
                    </div> */}
                </div>
            </div>

           
        </div>
    );
}

export default About;

