import React from 'react';
import { Link } from 'react-router-dom';
import './HomeAllService.css'

const HomeAllService = (props) => {
    const {image, description, title, id} = props.service
    const btnUrl = `/details/${id}`;
    return (
        <div className="home-single-service">
            <div className="home-service-img">
                <img src={image} alt="" width="100%" />
            </div>
            <div className="home-service-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={btnUrl}><button className="home-service-btn">View Details</button></Link>
            </div>
        </div>
    ); 
};
// home-service-btn
export default HomeAllService;