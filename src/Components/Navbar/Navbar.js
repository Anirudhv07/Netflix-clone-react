import React from 'react'
import "./Navbar.css"
import { text } from '@fortawesome/fontawesome-svg-core'

function Navbar() {
  return (
    <div className='navbar'>
      <div >
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />

      </div>
      <div className='navbarTitleMain'>
        <div>
          <h5 className='navbarTitle' >TV Shows</h5>
      

        </div>
        <div>
          <h5 className='navbarTitle'>Movies</h5>
        </div>
        <div>
          <h5 className='navbarTitle'>Recently Added</h5>
        </div>
        <div>
          <h5 className='navbarTitle'>My List</h5>
        </div>
        
        </div>
        
        <div>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar Logo" />
        </div>
      
    </div>
  )
}

export default Navbar
