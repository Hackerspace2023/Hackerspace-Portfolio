import React from 'react'
import "../../css/navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navItem">
          <div className="sectionNumber">//01.</div>
          <div className="sectionTitle">{`<Home/>`}</div>
        </div>
        <div className="navItem">
          <div className="navLogo">HS</div>
        </div>
        <div className="navItem"><button>Join US</button></div>
      </nav>
    </>
  )
}

export default Navbar