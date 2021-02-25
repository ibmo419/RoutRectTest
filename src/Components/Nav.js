import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    return (
            <nav>
            <ul className='nav-links'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='category'>
                <li>Category</li>
                </Link>
                <Link to='products'>
                <li>Products</li> 
                </Link> 
            </ul>
            </nav>
        
    )
}

export default Nav
