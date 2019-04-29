import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TabsIcon = (props) => (
  <div className="tab-icon">
    <FontAwesomeIcon icon={props.icon} />
    <span>{props.data || props.alt}</span>
  </div>
);

export default TabsIcon;
