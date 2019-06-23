import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PageHeader Components
 */
class PageHeader extends React.Component {
  render() {
    return (
      <div className="places-page-header">
        <NavLink to="/">Take A Seat</NavLink>
        <span>Cele mai populare localuri din Iași</span>
      </div>
    );
  }
}

export default PageHeader;
