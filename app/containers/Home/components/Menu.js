import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faUtensils, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Menu = () => (
  <div className="flex flex-center">
    <div className="header-menu-container">
      <div className="menu-option">
        <NavLink to="/localuri?tip=bar" className="menu-icon">
          <FontAwesomeIcon icon={faBeer} />
        </NavLink>
        <p>Baruri</p>
      </div>
      <div className="menu-option">
        <NavLink to="/localuri?tip=restaurant" className="menu-icon">
          <FontAwesomeIcon icon={faUtensils} />
        </NavLink>
        <p>Restaurante</p>
      </div>
      <div className="menu-option">
        <NavLink to="/localuri?tip=5-stele" className="menu-icon">
          <FontAwesomeIcon icon={faTrophy} />
        </NavLink>
        <p>Top localuri</p>
      </div>
    </div>
  </div>
);

export default Menu;
