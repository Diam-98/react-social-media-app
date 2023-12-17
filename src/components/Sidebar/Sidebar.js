import React, { useEffect, useState } from 'react';
import './sidebar.css';
import {
  HomeOutlined,
  SwitcherOutlined,
  TeamOutlined,
  FormOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import MenuItem from './MenuItem';

const menuItem = [
  {
    id: 1,
    title: 'Accueil',
    path: '/home',
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    title: 'Explore',
    path: '/explore',
    icon: <SwitcherOutlined />,
  },
  {
    id: 3,
    title: 'Reseau',
    path: '/network',
    icon: <TeamOutlined />,
  },
  {
    id: 4,
    title: 'Favorits',
    path: '/favorits',
    icon: <HeartOutlined />,
  },
  {
    id: 5,
    title: 'Publier',
    path: '/post/create',
    icon: <FormOutlined />,
  },
];

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemOnSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

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
        {menuItem.map((item) => {
          return (
            <MenuItem
              key={item.id}
              menuItem={item}
              isSelected={item.id === selectedItemId}
              onSelect={handleItemOnSelect}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
