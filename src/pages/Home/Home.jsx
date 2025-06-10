import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Hyperspeed from '../../blocks/Backgrounds/Hyperspeed/Hyperspeed';
import Particles from '../../blocks/Backgrounds/Particles/Particles';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

const Home = () => {

  const [category,setCategory]= useState('All')
  return (
    <div className="relative w-full  overflow-hidden pt-25">
      {/* Hyperspeed as background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10  md:px-30 ">
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        
       
        {/* You can add more content here */}
      </div>
    </div>
  );
};

export default Home;
