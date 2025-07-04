import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
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
     <div className="relative w-full min-h-screen pt-25 bg-transparent">
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
