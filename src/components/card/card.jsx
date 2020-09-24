import React from 'react';
import './card.scss'

import card from '../../assets/images/juno-black-card.png'
import PrimaryButton from '../buttom/solidButton'

const Card = ({title, percent,cashback,spots, totalSpots = 2500, includes, membership})=> {
   
    let spotleft = 0  
    spotleft = totalSpots - spots;

    const rangeCal = () =>{
        return Math.floor((100*spots)/totalSpots)
    }
  return (
                <div className="card">
                    <div className="imgcnt">
                <img src={card} alt="juno-black-card.png" width="80%"/>
                    </div>
                    <div className="plantype">
  <p className="title">{title}</p>
  <p className="percent">{percent}</p>
  <div><p className="highlight">{cashback}</p> <p>cash back</p></div> 
                    </div>
                    <div className="rangeCnt">
                        <div className="rangestats"> <p>2217/2500spots</p>
                        <p>{spotleft} spots left</p></div>
                        <div className="range">
                            <div style={{width:`${rangeCal()}%`}}></div>
                        </div>
                        <PrimaryButton text={"Sign Up Now"} btnType="primary" />
                    </div>

                    <div className="includes">
                        <h3>INCLUDES</h3>
                        <ul>
                            {
                                includes.map((line)=> <li>{line}</li>)
                            }
                        </ul>

                        <p>Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs.</p>
                    
                        
                    </div>

                    <div className="offer">
                            <p className="original">{membership} Membership Fee</p>
                            <p className="attention">Free for 6 Months $60 savings</p>
                        </div>
                    
                    
                </div>
  );
}

export default Card;


