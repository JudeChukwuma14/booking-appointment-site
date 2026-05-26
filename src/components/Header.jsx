import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <Link to="/">Logo</Link>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><Link to="/find-doctor">Services</Link></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header