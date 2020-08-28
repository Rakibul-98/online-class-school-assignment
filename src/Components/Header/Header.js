import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/courses">Courses</a>
                <a href="/status">Enrolled status</a>
                <a href="/manage">Manage cart</a>
            </nav>
        </div>
    );
};

export default Header;