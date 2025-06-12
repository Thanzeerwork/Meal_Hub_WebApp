import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Particles from '../../blocks/Backgrounds/Particles/Particles';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Footer from '../../components/Footer/Footer';

const Home = () => {

  const [category,setCategory]= useState('All')
  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-25">
  
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={2000}
          particleSpread={9}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      
    <div className="relative z-10 sm:px-10 md:px-30 ">
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        
      </div>
    </div>
  );
};

export default Home;
