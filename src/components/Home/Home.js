import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';
import Feedback from '../Feedback/Feedback';
import WelcomeNote from '../WelcomeNote/WelcomeNote';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeNote></WelcomeNote>
            <Packages></Packages>
            <Services></Services>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;