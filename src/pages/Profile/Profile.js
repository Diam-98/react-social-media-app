import React from 'react';
import './profile.css';
import profile from '../../images/robot-avatar.png';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import PostCard from '../../components/Card/PostCard';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-top'>
        <div className='left'>
          <img src={profile} alt='profile' />
          <div className='infos'>
            <h3>Diam Diallo</h3>
            <span>@diamil</span>
            <p>Ma suberbe bio.</p>
            <div className='stats'>
              <span>1 Posts</span>
              <span>20 Connections</span>
              <span>10 Favoris</span>
            </div>
          </div>
        </div>
        <Link to='/home/profile/edit' className='nav-link'>
          <EditOutlined />
          <span>Modifier Profile</span>
        </Link>
      </div>
      <h2>Mes posts</h2>
      <div className='post-list'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Profile;
