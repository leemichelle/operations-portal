import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <NavLink to="/companies">Companies</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/invoice">Invoice</NavLink>
  </div>
)

export default Navigation;