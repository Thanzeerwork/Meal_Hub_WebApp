import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { food_list, cartItems, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate()

  let noofItems = 0;
  let subtotal = 0;
  const deliveryFee = 2;

  return (
    <div className="cart pt-20 px-5 md:px-10 text-white min-h-screen bg-black">
      <div className="cart-items space-y-6">
        <h1 className='text-center text-4xl font-bold mb-6'>Your Cart</h1>

        {/* Table Headings */}
        <div className="grid grid-cols-6 font-semibold border-b border-white/30 pb-2 text-left">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Cart Items */}
        {food_list.map((item) => {
          const quantity = cartItems[item._id];

          if (quantity > 0) {
            noofItems++;
            const totalPerItem = item.price * quantity;
            subtotal += totalPerItem;

            return (
              <div
                key={item._id}
                className="grid grid-cols-6 items-center border-b border-white/10 py-4 text-sm md:text-base"
              >
                <img src={item.image} alt={item.name} className="w-16 md:w-20 rounded" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{quantity}</p>
                <p>₹{totalPerItem.toFixed(2)}</p>
                <button
                  className="text-red-400 hover:text-red-600 transition"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            );
          }

          return null;
        })}

        {/* Cart Summary */}
        {noofItems > 0 && (
          <div className="cart-bottom mt-10 flex flex-col md:flex-row justify-between gap-10">
            {/* Totals */}
            <div className="w-full md:w-1/2 space-y-4 bg-white/10 p-5 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹{subtotal.toFixed(2)}</p>
              </div>
              <hr className="border-white/20" />
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>₹{deliveryFee.toFixed(2)}</p>
              </div>
              <hr className="border-white/20" />
              <div className="flex justify-between font-semibold text-lg">
                <p>Total</p>
                <p>₹{(subtotal + deliveryFee).toFixed(2)}</p>
              </div>
              <button 
              className="w-full mt-4 py-3 bg-blue-600 rounded hover:bg-blue-700 transition font-semibold"
              onClick={()=> navigate('/order')}>
                Proceed to Checkout
              </button>
            </div>

            {/* Promo Code */}
            <div className="w-full md:w-1/2 space-y-4 bg-white/10 p-5 rounded-lg">
              <h3 className="font-semibold text-lg">Have a Promo Code?</h3>
              <input
                type="text"
                placeholder="Enter promo code"
                className="w-full px-4 py-2 rounded bg-black border border-white/20 text-white"
              />
              <button className="w-full mt-2 py-2 bg-green-600 rounded hover:bg-green-700 transition font-medium">
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Empty Cart */}
        {noofItems === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 space-y-4">
            <img src={assets.basket_icon} alt="Empty Cart" className="w-24 h-24 opacity-70" />
            <p className="text-xl font-medium">Your cart is empty</p>
            <p className="text-sm text-gray-500">Start adding items to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
