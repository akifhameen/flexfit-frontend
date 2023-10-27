import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [color , setColor] = useState('white')
  return (
    <div class="nav__main-div">
        <div class="nav__name-div">
            <p class="nav__name-p1">Flex<span style={{color:'white'}}>Fit</span></p>
        </div>
        <div class="nav__navigation" style={{color:color}}>
            <ul>
                <li><a>Home</a></li>
                <li><a>About us</a></li>
                <li><a>Classes</a></li>
                <li><a>Online shop</a></li>
                <li><a>Blogs and Articles</a></li>
            </ul>
        </div>
        <div class="nav__form-btn" style={{color:color}}>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
