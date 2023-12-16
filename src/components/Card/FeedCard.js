import React from 'react';
import authorProfile from '../../images/robot-avatar.png';
import firstPost from '../../images/jeux-video.jpg';
import { EditOutlined, HeartOutlined, SaveOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const FeedCard = () => {
  return (
    <div className='feed-card'>
      <div className='card-top'>
        <div className='left-side'>
          <img src={authorProfile} alt='author profile' />
          <div className='author-info'>
            <h3>Diam Diallo</h3>
            <p>Il y'a 29 minutes</p>
          </div>
        </div>
        <div className='right-side'>
          <Link to='/' className='link-icon'>
            <EditOutlined />
          </Link>
        </div>
      </div>
      <div className='card-body'>
        <div className='post-text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            maxime provident quos doloremque molestias reiciendis pariatur nulla
            porro ipsa molestiae similique recusandae quas odio quibusdam
            voluptate voluptates, fugit veritatis doloribus?
          </p>
        </div>
        <img src={firstPost} alt='post-slug' />
      </div>
      <div className='card-bottom'>
        <Button className='post-button' icon={<HeartOutlined />}>
          0
        </Button>
        <Button className='post-button' icon={<SaveOutlined />}></Button>
      </div>
    </div>
  );
};

export default FeedCard;
