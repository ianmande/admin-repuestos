import React from 'react';
import { Link } from 'react-router-dom';

const ItemMenu = ({ title, path }) => {
  return (
    <li className="item__menu">
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default ItemMenu;
