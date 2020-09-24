import React from 'react';

import './sectioninfo.scss'

import junoApy from '../../assets/images/juno-apy-215.svg'

function SectionInfo() {
  return (
    <div className="sectioninfo"> 
        <div className="infoGrid">
            <div><h2 className="subheadline">Start saving for a rainy day fund</h2></div>
            <div><h1 className="mainheadline">Use Our Checking <br/> Account to Achieve Your <br/> Financial Goals</h1></div>
            <div><p>With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.</p></div>
        </div>
        <div className="imgGrid">
            <img src={junoApy} alt="juno-apy-215.svg" width="100%"/>
        </div>
       </div>
  );
}

export default SectionInfo;

