import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  SwitcherOutlined,
  TeamOutlined,
  SaveOutlined,
  FormOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li className='menu-item active'>
          <Link to='/' className='nav-link'>
            <HomeOutlined />
            <span>Accueil</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/' className='nav-link'>
            <SwitcherOutlined />
            <span>Explorer</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/' className='nav-link'>
            <TeamOutlined />
            <span>Reseaux</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/' className='nav-link'>
            <SaveOutlined />
            <span>Enregistre</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/' className='nav-link'>
            <FormOutlined />
            <span>Publier</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
