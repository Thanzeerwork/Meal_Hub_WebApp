import React, { useState } from 'react'
import './Navbar.css'
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText'
import StarBorder from '../../blocks/Animations/StarBorder/StarBorder'
import GooeyNav from '../../blocks/Components/GooeyNav/GooeyNav'


const Navbar = ({setShowLogin,ShowLogin}) => {
    
    const items = [
        { label: "Home", href: "#" },
        { label: "Menu", href: "#menu" },
        { label: "Contact", href: "#footer" },
        {label:"Mobile",href:"#"}
    ];

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-black z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li className='active'><a>Item 3</a></li>
                    </ul>
                </div>
                <ShinyText text="Galaxy Meals" disabled={false} speed={2} className='custom-class text-2xl pl-8' />
            </div>
            <div style={{  position: 'relative' }} className='hidden md:block'>
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
            <div className="navbar-end" onClick={()=>setShowLogin(prev => prev === false ? true : false)}>
                <StarBorder
                    as="button"
                    className="custom-class bg-transparent text-4xl px-15 "
                    color="white"
                    speed="3s"
                    
                >
                    Login
                </StarBorder>
            </div>

        </div>
    )
}

export default Navbar