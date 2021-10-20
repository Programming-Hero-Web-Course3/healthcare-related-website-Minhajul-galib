import React from 'react';
import './HomeInfo.css'
import work1 from '../../../image/work (1).png'
import work2 from '../../../image/work (2).png'
import work3 from '../../../image/work (3).png'
import work4 from '../../../image/work (4).png'
const HomeInfo = () => {
    return (
        <div className="home-info">
            <div className="work">
                <div className="work-div">
                    <img src={work1} alt="" width="10%" />
                    <img src={work2} alt="" width="10%" />
                    <img src={work3} alt="" width="10%" />
                    <img src={work4} alt="" width="10%" />
                </div>
            </div>
            <div className="offer">
                <h2>We Offer Our best</h2>
                <div className="offer-div">
                    <div className="offer-1">
                     <div className="offer-div-text"><p>LATEST TECHNOLOGIES</p></div>
                    </div>
                    <div className="offer-2">
                     <div className="offer-div-text"><p>MEDICAL EXCELLENCE</p></div>
                    </div>
                    <div className="offer-3">
                     <div className="offer-div-text"><p>DRUGS AND MEDICINE</p></div>
                    </div>
                    <div className="offer-4">
                     <div className="offer-div-text"><p>24/7 BLOOD BANK</p></div>
                    </div>
                    <div className="offer-5">
                     <div className="offer-div-text"><p>EMERGENCY CARE UNIT</p></div>
                    </div>
                    <div className="offer-6">
                     <div className="offer-div-text"><p>AMBULANCE SERVICES</p></div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}; 

export default HomeInfo;