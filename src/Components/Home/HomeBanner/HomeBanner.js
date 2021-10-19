import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div>
            <Carousel fade variant="dark">
                <Carousel.Item className="home-banner-img">
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/HEW8dRP.png"
                    alt="First slide"
                    /> 
                    <Carousel.Caption>
                    <h3>Our Health Care As Your Desire</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="home-banner-img">
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/4s0AyxY.png"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Our Health Care As Your Desire</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="home-banner-img">
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/i6GweMG.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Our Health Care As Your Desire</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;