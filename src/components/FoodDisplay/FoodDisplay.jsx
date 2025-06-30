import { useContext, useState } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets'


const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='food-display'>
            <h1 className='text-3xl font-bold'>Food Items Near You</h1>
            <div className="searchbar flex m-5" >
                <input
                    type="text"
                    placeholder="Search food..."
                    className="bg-transparent border-b border-white text-white py-1 outline-none placeholder-gray-400"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={assets.search_icon} className="px-5 filter invert brightness-0" alt="" />
            </div>
            <div className="food-display-list pt-5 grid grid-flow-row sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {food_list
                    .filter(item =>
                        (category === 'All' || item.category === category) &&
                        item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                        <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category} />
                    ))
                }
            </div>

        </div>
    )
}

export default FoodDisplay