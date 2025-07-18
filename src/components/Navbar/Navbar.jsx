import './Navbar.css';
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText';
import StarBorder from '../../blocks/Animations/StarBorder/StarBorder';
import GooeyNav from '../../blocks/Components/GooeyNav/GooeyNav';
import { assets } from '../../assets/frontend_assets/assets';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin, ShowLogin }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn && users.length > 0) {
            const lastUser = users[users.length - 1];
            setUser(lastUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setUser(null);
        setShowLogin(false);
        window.location.reload();
        navigate('/');

    };

    const items = [
        { label: "Home", href: "/#" },
        { label: "Menu", href: "/#menu" },
        { label: "Contact", href: "/#footer" },
        { label: "Mobile", href: "#" }
    ];

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-black z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="#">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#">Mobile App</a></li>
                        <li><a href="#menu">Search</a></li>

                        <li className='active'><a href="#cart">Cart</a></li>
                        <li><a href="#footer">Contact</a></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
                <ShinyText text="Galaxy Meals" disabled={false} speed={2} className='custom-class text-2xl pl-8' />
            </div>

            <div style={{ position: 'relative' }} className='hidden md:block'>
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>

            <div className='navbar-end flex items-center gap-4 pr-4'>
                <a href="#menu" className="hidden md:block">
                    <img src={assets.search_icon} className="px-1 filter invert brightness-0" alt="" />
                </a>
                <a href="#cart" className="hidden md:block">
                    <img src={assets.basket_icon} className="px-1 filter invert brightness-0" alt="" />
                </a>


                {user ? (
                    <div className="flex items-center gap-4 text-white ">
                        <span>Hello, {user.username || user.email}</span>
                        <button onClick={handleLogout} className=" hidden md:block px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-sm">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div onClick={() => setShowLogin(prev => !prev)}>
                        <StarBorder
                            as="button"
                            className="custom-class bg-transparent text-4xl px-15"
                            color="white"
                            speed="3s"
                        >
                            {ShowLogin ? 'Go Back' : 'Login'}
                        </StarBorder>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
