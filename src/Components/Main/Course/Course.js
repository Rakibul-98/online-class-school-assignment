import React from 'react';
import './Course.css'


const Course = (props) => {
    const {name,instractor,price} = props.course
    return (
        <div className='course'>
            <h1 className='course-name'>{name}</h1>
            <h4>Instractor : {instractor}</h4>
            <h3>Price : $ {price}</h3>
            <button className='buyButton' onClick={() => props.handleCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;