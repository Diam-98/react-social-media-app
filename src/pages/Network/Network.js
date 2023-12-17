import React from 'react';
import './network.css';
import UserCard from '../../components/Card/UserCard';
import SearchBox from '../../components/Search/SearchBox';

const Network = () => {
  return (
    <div className='network'>
      <h2>Touts les utilisateurs</h2>
      <SearchBox />
      <hr />
      <div className='users-list'>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Network;
