import React from 'react';

import './sectionSponsers.scss';

import sp1 from '../../assets/images/sp1.png'
import sp2 from '../../assets/images/sp2.png'
import sp3 from '../../assets/images/sp3.png'

const SectionSponsers = () =>{
    return (
        <div className="sectionSponsers">
            <h3>Backed By The Best</h3>
            <div className="spCnt">
            <div className="imgCnt">
                <img src={sp1} alt="sp1" />
            </div>
            <div className="imgCnt">
                <img src={sp2} alt="sp2" />
            </div>
            <div className="imgCnt">
                <img src={sp3} alt="sp3" />

            </div>
        </div>
        </div>
        
    );
}

export default SectionSponsers;