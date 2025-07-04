import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Particles from '../../blocks/Backgrounds/Particles/Particles';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Login from '../../components/Login/Login';
import Cart from '../../components/Cart/Cart';

const Home = ({ ShowLogin ,setShowLogin}) => {
  const [category, setCategory] = useState('All');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

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
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 md:px-30">
        
        {ShowLogin && !isLoggedIn ? <Login setShowLogin={setShowLogin} /> : <Header />}
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
