// src/layouts/UserLayout.jsx
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Particles from '../blocks/Backgrounds/Particles/Particles';

const UserLayout = ({ ShowLogin, setShowLogin }) => {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={150}
          particleSpread={9}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      <Navbar setShowLogin={setShowLogin} ShowLogin={ShowLogin} />
      <div className="relative z-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
