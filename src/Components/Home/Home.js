import React from 'react';
import './Home.css'
import HomeBanner from './HomeBanner/HomeBanner';
import HomeInfo from './HomeInfo/HomeInfo';
import HomePageServices from './HomeServices/HomePageServices'
// import HomeInfo from './HomeInfo/HomeInfo';
const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomePageServices></HomePageServices>
            <HomeInfo></HomeInfo>
        </div>
    );
};

export default Home;