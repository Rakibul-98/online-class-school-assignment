import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    const total = cart.reduce ( (total,crs) => total+ crs.price , 0)

    const formatNumber = num => {
        const precision = num.toFixed(2)
          return Number(precision);
    }
    return (
        <div className='cart-container'>
            <h1>Order Summery</h1>
            <h4>Courses Enrolled : {cart.length} </h4>
            <p>Total Price:{formatNumber(total)}</p>
        </div>
    );
};

export default Cart;