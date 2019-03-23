import React from 'react';
import ListItem from './ListItem';
import placeCard1 from '../../../images/place-cards/place-card1.jpg';
import placeCard2 from '../../../images/place-cards/place-card2.jpg';
import placeCard3 from '../../../images/place-cards/place-card3.jpg';
import placeCard4 from '../../../images/place-cards/place-card4.jpg';
import placeCard5 from '../../../images/place-cards/place-card5.jpg';
import placeCard6 from '../../../images/place-cards/place-card6.jpg';
import placeCard7 from '../../../images/place-cards/place-card7.jpg';
import placeCard8 from '../../../images/place-cards/place-card8.jpg';

const dummyData = [
  {
    id: 1,
    img: placeCard1,
    name: 'Moo Bistro',
    address: 'Lorem ipsum',
    priceType: 'Moderat',
    placeType: 'Cafenea',
    kitchenType: 'Random'
  },
  {
    id: 2,
    img: placeCard2,
    name: 'Cafeneaua Piața Unirii',
    address: 'Lorem ipsum',
    priceType: 'Moderat',
    placeType: 'Cafenea',
    kitchenType: 'Random'
  },
  {
    id: 3,
    img: placeCard3,
    name: 'Legends pub',
    address: 'Lorem ipsum',
    priceType: 'Moderat',
    placeType: 'Cafenea',
    kitchenType: 'Random'
  },
  {
    id: 4,
    img: placeCard4,
    name: 'Fenice',
    address: 'Lorem ipsum',
    priceType: 'Moderat',
    placeType: 'Cafenea',
    kitchenType: 'Random'
  },
  {
    id: 5,
    img: placeCard5,
    name: 'Dionisos',
    address: 'Lorem ipsum',
    priceType: 'Moderat',
    placeType: 'Cafenea',
    kitchenType: 'Random'
  },
  {
    id: 6,
    img: placeCard6,
    name: 'Taverna',
    address: 'Lorem ipsum',
    priceType: 'Moderat',
    placeType: 'Cafenea',
    kitchenType: 'Random'
  },
  {
    id: 7,
    img: placeCard7,
    name: 'Square',
    address: 'Lorem ipsum',
    priceType: 'Moderat',
    placeType: 'Cafenea',
    kitchenType: 'Random'
  },
  {
    id: 8,
    img: placeCard8,
    name: 'Fika',
    address: 'Lorem ipsum',
    priceType: 'Moderat',
    placeType: 'Cafenea',
    kitchenType: 'Random'
  }
];

const List = () => (
  <div style={{ width: '100%' }}>
    {dummyData.map((item) => (
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
);

export default List;
