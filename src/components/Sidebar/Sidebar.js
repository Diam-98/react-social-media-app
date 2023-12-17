import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  SwitcherOutlined,
  TeamOutlined,
  FormOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const updateDimensions = () => {
    setIsMobile(window.innerWidth <= 650);
  };

  return (
    <div className={isMobile ? 'bottom-bar' : 'sidebar'}>
      <ul>
        <li className='menu-item active'>
          <Link to='/' className='nav-link'>
            <HomeOutlined />
            <span className='link-text'>Accueil</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/' className='nav-link'>
            <SwitcherOutlined />
            <span className='link-text'>Explorer</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/' className='nav-link'>
            <TeamOutlined />
            <span className='link-text'>Reseaux</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/' className='nav-link'>
            <HeartOutlined />
            <span className='link-text'>Favoris</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/' className='nav-link'>
            <FormOutlined />
            <span className='link-text'>Publier</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
