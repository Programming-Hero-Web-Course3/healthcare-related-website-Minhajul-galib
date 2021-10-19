import React from 'react';
import './Home.css'
import HomeBanner from './HomeBanner/HomeBanner';
import HomePageServices from './HomeServices/HomePageServices'
// import HomeInfo from './HomeInfo/HomeInfo';
const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomePageServices></HomePageServices>
        </div>
    );
};

export default Home;