
import React from 'react';
import Mprofile from './Mprofile.jpg'

const About = () => {
    return(
        <div>
            <div id="header" className="fl w-100 bg-green">
                <h1>ABOUT ME </h1>
            </div>

            <div className="cf pa2" height="200px">

                <div id="imageHolder" className ="fl w-50 bg-white ">
                 
                    <article className="br3  ba-orange round dark-gray b--black-10 mv4 w-100  w-25-l mw6 shadow-5 center">
                        <img id='inputimage' className="rounded  " alt='' src={Mprofile} width='500px' height='auto'/>
                    </article>
                </div>

            
                <div className ="fl w-50 bg-white">
                    <article class="center mw5 mw6-ns hidden ba mv4 ">
                        <div class="pa3 bt tj ">
                            <p class="f4 f5-ns lh-copy measure mv0">
                            I'm a full-stack developer with a wide variety of experience in my field. 
                            My skills rang from ASP.Net, C#.Net, VB.Net, Html5, Css3, JavaScript to 
                            MS.Sql server, PL/SQL Oracle, Postgresql and React.js,Redux, Node.js , Express.js.
                            
                            </p>
                        </div>
                    </article> 
                </div>
                
            </div>
        </div>
    );
}

export default About;

