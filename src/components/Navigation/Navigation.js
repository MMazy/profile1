import React from 'react';
import './Navigation.css';

const Navigation =() =>{
    return(
    <div className="nav fl w-100 " height="50px">
        <div className="wrap-father animated">
            <div className="wrap-child">
                <nav className="dt w-250 mw8 v-mid"> 
                    <div className="dtc v-mid tr pa3 fw5 link-wrap">
                        <a className="f4 hover-white no-underline white-70 dn  dib-ns pv2 ph3 orange" href="/" >Home</a> 
                        <a className="f4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >About</a> 
                        <a className="f4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Projects</a> 
                        <a className="f4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Contact</a> 
                    </div>
                </nav>
            </div> 
      </div>
    </div>
    );

}

export default Navigation;
