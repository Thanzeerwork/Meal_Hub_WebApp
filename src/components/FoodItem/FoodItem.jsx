import React, { useContext, useState } from 'react'
import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, image, price, description, category }) => {
    const [itemCount, setitemCount] = useState(0)
    const { addToCart, cartItems,removeFromCart} = useContext(StoreContext);
    return (
        <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.2}

            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.2}
        >
            <div className="card-xs bg-transparent  shadow-sm m-5 rounded-3xl">
                <figure className='relative '>
                    <img className='rounded-t-3xl'
                        src={image}
                        alt="Foods" />
                    {!cartItems[id]
                        ? <img className='add absolute bottom-3 right-3 w-10 ' src={assets.add_icon_white} onClick={() => addToCart(id)} />
                        : <div className='food-item-counter flex absolute bottom-3 right-3 bg-white rounded-4xl'>
                            <img className='counter-add' src={assets.remove_icon_red} onClick={() =>removeFromCart(id)} />
                            <p className='px-1 text-warning'>{cartItems[id]}</p>
                            <img className='counter-sub' src={assets.add_icon_green} onClick={() => addToCart(id)} />
                        </div>}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                    </div>
                    <div className="card-actions">
                        <h1 className='text-2xl font-bold text-warning'>₹{price}</h1>
                        {/* <button className="btn btn-warning">Add To Cart</button> */}
                    </div>
                </div>

            </div>
        </AnimatedContent>

    )
}

export default FoodItem