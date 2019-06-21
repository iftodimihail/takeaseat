import React from 'react';

const ContainerInner = (props) => (
  <div className="main-container-inner" style={props.smallMargin && { marginTop: 50 }}>
    {props.children}
  </div>
);

export default ContainerInner;
