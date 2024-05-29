import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import TsParticles from '../components/Particles/TsParticles';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <TsParticles></TsParticles>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;