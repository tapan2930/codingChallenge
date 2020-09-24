import React from "react";

import "./sectionHero.scss";
import hero from "../../assets/images/mobile-juno-hero.png";
import flag from "../../assets/images/createaccount-homeaddress-flag.png"
import googleplay from "../../assets/images/googleplay.png"
import applestore from "../../assets/images/applepay.png"



import Emailform from '../emailform/emailform'

const HeroSection = () => {
  return (
    <div className="section-hero">
      <div className="info-grid">

        <div>
          <h1 className="headline">The Most Powerful <br /> Checking Account</h1>
        </div>

        <div >
            <h3 className="subheadline">Our checking account gives you higher returns <br />
            than a savings account with no hidden fees.</h3>
        </div>
        <div>
           <Emailform />
        </div>
        <div className="hightlightCnt">
            <img src={flag} alt="createaccount-homeaddress-flag" width="30"/>
            <h4 className="highlight">283 spots left for Priority Access</h4>
        </div>

        <div className="appCnt">
            <img src={googleplay} alt="googleplay" width="150px" />
            <img src={applestore} alt="applestore" width="150px" />
        </div>
      </div>

      <div className="img-grid">
        <div>
          <img src={hero} alt="mobile-juno-hero" width="90%" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
