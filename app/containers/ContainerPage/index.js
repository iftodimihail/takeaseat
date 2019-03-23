import React from 'react';

const Container = (props) => (
  <div className="global-container">
    <div className="global-container-content">
      {props.children}
    </div>
  </div>
);

export default Container;
