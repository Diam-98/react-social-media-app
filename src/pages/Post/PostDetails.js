import React from 'react';
import './createPost.css';
import postImage from '../../images/jeux-video-1.jpeg';
import profile from '../../images/robot-avatar.png';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const PostDetails = () => {
  return (
    <div className='post-detail'>
      <div className='post-container'>
        <div className='left'>
          <img src={postImage} alt='post detail' />
        </div>
        <div className='right'>
          <div className='author'>
            <div className='left'>
              <img src={profile} alt='profile' />
              <div className='infos'>
                <span>Diam Diallo</span>
                <p>Il y'a 3 jours</p>
              </div>
            </div>
            <Button icon={<HeartOutlined />} className='reaction-button'>
              0
            </Button>
          </div>
          <hr />
          <div className='content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
