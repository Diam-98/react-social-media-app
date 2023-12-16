import React from 'react'
import './header.css'
import userProfile from "../../images/robot-avatar.png"

const Header = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
          <h1>SocialApp</h1>
        </div>
        <div className='profile'>
          <img src={userProfile} alt='user profile'/>
          <div className='user-infos'>
            <h3>Diam Diallo</h3>
            <p>@diamil</p>
          </div>
        </div>
    </div>
  );
}

export default Header;
