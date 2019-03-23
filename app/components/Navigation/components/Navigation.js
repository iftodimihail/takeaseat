import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="p-extra-md navigation">
    <NavLink className="m-r-md" exact to="/" activeClassName="active">
      <span>Home</span>
    </NavLink>
    <NavLink className="m-r-md" to="/public-page" activeClassName="active">
      <span>Public page</span>
    </NavLink>
    <NavLink className="m-r-md" to="/protected-page" activeClassName="active">
      <span>Protected page</span>
    </NavLink>
    <NavLink className="m-r-md" to="/unauthenticated-page" activeClassName="active">
      <span>Unauthenticated page</span>
    </NavLink>
    <NavLink className="m-r-md" to="/forgot-password" activeClassName="active">
      <span>Forgot password (need to be unlogged)</span>
    </NavLink>
    <NavLink className="m-r-md" to="/asd" activeClassName="active">
      <span>Not found page</span>
    </NavLink>
  </div>
);

export default Navigation;
