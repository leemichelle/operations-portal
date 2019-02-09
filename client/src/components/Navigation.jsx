import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  // <div className="navigation">
  //   <NavLink to="/companies">Companies</NavLink><br/>
  //   <NavLink to="/products">Products</NavLink><br/>
  //   <NavLink to="/invoice">Invoice</NavLink><br/>
  // </div>

  <div className="navigation">
    <br/>
    <div>Companies</div><br/>
    <div>Products</div><br/>
    <div>Invoice</div><br/>
  </div>
)

export default Navigation;