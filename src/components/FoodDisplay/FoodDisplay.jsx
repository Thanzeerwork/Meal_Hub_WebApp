import React from 'react'
import { food_list } from '../../assets/frontend_assets/assets'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({ category }) => {
    return (
        <div className='food-display'>
            <h1 className='text-3xl font-bold'>Food Items Near You</h1>
            <div className="food-display-list grid grid-flow-row grid-cols-4 pt-5">
                {food_list.map((item, index) => {
                    return <FoodItem key={index}  id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
                })}
            </div>

        </div>
    )
}

export default FoodDisplay