import React from 'react';
import { useNavigate } from 'react-router';

const MenuItem = ({ menuItem, isSelected, onSelect }) => {
  const navigate = useNavigate();
  const handeNavigate = () => {
    onSelect(menuItem.id);
    navigate(menuItem.path);
  };

  const activeMenuItemClassName = isSelected ? 'menu-item active' : 'menu-item';

  return (
    <li className={activeMenuItemClassName} onClick={handeNavigate}>
      <div className='nav-link'>
        {menuItem.icon}
        <span className='link-text'>{menuItem.title}</span>
      </div>
    </li>
  );
};

export default MenuItem;
