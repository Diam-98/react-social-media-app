import React from 'react';
import './userCard.css';
import user from '../../images/robot-avatar.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const UserCard = () => {
  return (
    <div className='network-user'>
      <Link to='/'>
        <img src={user} alt='network user' />
      </Link>
      <Link to='/' className='link'>
        <span>Diam Diallo</span>
      </Link>
      <p>@Diamil</p>
      <Button className='connect-button'>Connecter</Button>
    </div>
  );
};

export default UserCard;
