import React from 'react'
import "../css/Navbar.css"

const Navbar = ({setSearchInput,searchInput}) => {
  return (
  <>
    <div className='navbar'>
    <div className='brand'>
    <i className="fa-solid fa-crown crown"></i>
    <p className='brand-text'>Ansh Keep</p>
    <input onChange={(e)=>setSearchInput(e.target.value)} className='search ms-auto' type="text" name='search' id='search' placeholder='Search for Tag Name' value={searchInput} />
    </div>
    </div>
  </>
  )
}

export default Navbar