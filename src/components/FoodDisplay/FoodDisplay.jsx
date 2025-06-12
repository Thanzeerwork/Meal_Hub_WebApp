import React, { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'


const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-display'>
            <h1 className='text-3xl font-bold'>Food Items Near You</h1>
            <div className="food-display-list pt-5 grid grid-flow-row sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category} />
                    }

                })}
            </div>

        </div>
    )
}

export default FoodDisplay