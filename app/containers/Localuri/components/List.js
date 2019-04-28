import React from 'react';
import isEmpty from 'lodash/isEmpty';
import ListItem from './ListItem';

const List = (props) => (
  !isEmpty(props.data) ?
    <div style={{ width: '100%' }}>
      {props.data.map((item) => (
        <ListItem
          key={item.id}
          img={item.img}
          name={item.name}
          address={item.address}
          priceType={item.priceType}
          placeType={item.placeType}
          kitchenType={item.kitchenType}
        />
      ))}
    </div>
    : null
);

export default List;
