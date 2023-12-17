import React from 'react';
import './favorit.css';
import PostCard from '../../components/Card/PostCard';

const Favorit = () => {
  return (
    <div className='favorit'>
      <h2>Mes favoris</h2>
      <div className='post-list'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Favorit;
