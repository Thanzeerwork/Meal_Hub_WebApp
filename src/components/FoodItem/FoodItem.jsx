import React from 'react'
import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent'

const FoodItem = ({ id, name, image, price, description, category }) => {
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
            <div className="card-xs bg-neutral  shadow-sm m-5">
                <figure>
                    <img
                        src={image}
                        alt="Foods" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Food</div>
                        <div className="badge badge-outline">{category}</div>
                    </div>
                    <div className="card-actions justify-between mt-2">
                        <h1 className='text-2xl font-bold text-warning'>₹{price}</h1>
                        <button className="btn btn-warning">Add To Cart</button>
                    </div>
                </div>

            </div>
        </AnimatedContent>

    )
}

export default FoodItem