import React from 'react';
import './header.css';
import userProfile from '../../images/robot-avatar.png';
import { Link } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <span>Connector.</span>
      </div>
      <div className='right-side'>
        <Link to='/home/profile' className='profile'>
          <img src={userProfile} alt='user profile' />
          <div className='user-infos'>
            <span>Diam Diallo</span>
            <p>@diamil</p>
          </div>
        </Link>
        <Link to='/login' className='link logout'>
          <LogoutOutlined />
        </Link>
      </div>
    </div>
  );
};

export default Header;
