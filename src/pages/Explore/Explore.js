import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import './explore.css';
import { Select } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import PostCard from '../../components/Card/PostCard';

const { Option } = Select;

const Explore = () => {
  const handleChange = (value) => {
    // Gérer le changement d'option ici
    console.log(`Option sélectionnée: ${value}`);
  };

  return (
    <div className='explore'>
      <h2>Explorer des articles</h2>
      <div className='search-box'>
        <SearchOutlined />
        <input type='text' placeholder='Rechercher un post' />
      </div>
      <div className='title-filtre'>
        <h3>Populaires</h3>
        <Select defaultValue='all' onChange={handleChange}>
          <Option value='all'>Tout</Option>
          <Option value='a-z'>
            A-Z <CaretUpOutlined />
          </Option>
          <Option value='z-a'>
            Z-A <CaretDownOutlined />
          </Option>
        </Select>
      </div>
      <div className='post-list'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Explore;
