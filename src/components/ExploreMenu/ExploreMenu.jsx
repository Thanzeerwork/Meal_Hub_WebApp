import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import { div } from 'framer-motion/client'
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='bg-transparent explore-menu ' id='menu'>
            <h1 className='text-3xl font-bold py-5'>Explore menu</h1>
            <p className='explore-menu-text max-w-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ipsam magni, soluta atque cumque obcaecati non saepe ab adipisci corporis.</p>
            <div className="explore-menu-list justify-around flex py-10">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div className='explore-menu-list-item text-center ' key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
                                <img src={item.menu_image} alt="" className={category===item.menu_name?'active1':''}/>
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExploreMenu