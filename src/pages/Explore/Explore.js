import React from 'react';
import './explore.css';
import { Select } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import PostCard from '../../components/Card/PostCard';
import SearchBox from '../../components/Search/SearchBox';

const { Option } = Select;

const Explore = () => {
  const handleChange = (value) => {
    console.log(`Option sélectionnée: ${value}`);
  };

  return (
    <div className='explore'>
      <h2>Explorer des articles</h2>
      <SearchBox />
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
