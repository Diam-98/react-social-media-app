import React from 'react';
import postImage from '../../images/jeux-video.jpg';
import userImage from '../../images/robot-avatar.png';
import { HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const PostCard = () => {
  return (
    <div className='post-card'>
      <Link to='/home/post/detail/1'>
        <img src={postImage} alt='post-slug' />
      </Link>
      <div className='post-infos'>
        <div className='user'>
          <img src={userImage} alt='user' />
          <span>Diam Diallo</span>
        </div>
        <div className='post-reaction'>
          <Button className='post-button' icon={<HeartOutlined />}>
            0
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
