import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import './searchBox.css';

const SearchBox = () => {
  return (
    <div className='search-box'>
      <SearchOutlined />
      <input type='text' placeholder='Rechercher un post' />
    </div>
  );
};

export default SearchBox;
