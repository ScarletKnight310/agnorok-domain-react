import React from 'react'
import './header.css'
import home from "../../assets/space-full.png";
function Header() {
  return (
    <div>
      <img class="home-bg-img" src={home} alt="..."></img>
    </div>
  )
}

export default Header