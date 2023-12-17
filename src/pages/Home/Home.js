import React from 'react';
import './home.css';
import FeedCard from '../../components/Card/FeedCard';
import UserCard from '../../components/Card/UserCard';

const Home = () => {
  return (
    <div className='home'>
      <div className='feed'>
        <h2>Fil d'actualite</h2>
        <FeedCard />
        <FeedCard />
      </div>
      <div className='network'>
        <h2>Reseau</h2>
        <div className='network-body'>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
