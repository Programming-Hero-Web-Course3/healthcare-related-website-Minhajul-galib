import React from 'react';
import './About.css'
import aboutImg from '../../image/about-doctor.png'
const About = () => {
    return (
        <div className="about">
            <div className="about-banner">
                <div className="about-banner-div">
                <h1>About Our Doctors</h1>
                <p>Just two good old boys never meaning no harm beats all you have ever saw been in trouble with the law since the day they was born so the most of day</p>
                </div>
            </div>
            <div className="about-info d-flex">
                <div className="about-info-1">
                    <img src={aboutImg} alt="" width="100%" />
                </div>
                <div className="about-info-2">
                    <h4>We assure about your best care</h4>
                    <p>Our Medical Social Workers take care of patients and families who encounter challenges in adapting to mental, social and emerging from ailment.our Rehabilitation Services gives exhaustive therapeutic and professional. recovery to deliver a representative's obstructions to employ ability.</p>
                </div>
            </div>
        </div>
    );
};
 
export default About;