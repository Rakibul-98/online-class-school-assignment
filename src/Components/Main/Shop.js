import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Course from './Course/Course';
import Cart from './Cart/Cart';

const Shop = () => {
    const first12=fakeData.slice(0,12)
    const [courses,srtCourses]=useState(first12);

    const [cart, setCart]=useState([]);
    const handleCourse = (course)=>{
        const newCart =[...cart,course];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>

            <div className="course-container">
                {
                    courses.map(course=> <Course course={course} key={course.id}
                    handleCourse={handleCourse}
                    ></Course>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;