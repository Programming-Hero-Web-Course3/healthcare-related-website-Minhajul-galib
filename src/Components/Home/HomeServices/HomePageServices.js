import React from 'react';
import useServices from '../../../Hooks/useServices';
import HomeAllService from './HomeAllService/HomeAllService';
import './HomePageServices.css'

const Services = () => {
    const [services] = useServices();
    console.log(services);
    return (
        <div className="home-service">
            <h4>Our Services</h4>
            <h6>We have enough capability to take care your health</h6>
            <div className="home-service-div">
            {
                services.map(service => <HomeAllService
                                            key={service.id}
                                            service={service}
                                            ></HomeAllService>)
            }
            </div>
        </div>
    );
};

export default Services;