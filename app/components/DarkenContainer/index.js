import React from 'react';
import classNames from 'classnames';

const DarkenContainer = ({
  width, height, hovered, ...props
}) => (
  <div
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    className={classNames('darken-opacity-container', { hovered })}
    style={{ height, width }}
  />
);

export default DarkenContainer;
