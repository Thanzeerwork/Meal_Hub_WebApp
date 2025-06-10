import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import { div } from 'framer-motion/client'
import './ExploreMenu.css';

const ExploreMenu = () => {
  return (
    <div className='bg-transparent explore-menu'>
        <h1 className='text-3xl'>Explore menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit.</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index) => {
                    return(
                      <div className='explore-menu-list-item' key={index}>
                        <img src={item.menu_image} alt="" />
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