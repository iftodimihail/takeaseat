import React from 'react';
import PlaceCard from '../../../components/PlaceCard';
import { placeCards } from '../../../images/place-cards';

const PlaceCards = () => (
  <div className="places">
    {placeCards.map((placeCard) => (
      <PlaceCard
        key={placeCard.id}
        name={placeCard.name}
        cardImage={placeCard.img}
        rate={Math.random() * 5}
        votes={Math.random() * 240}
      />))}
  </div>
);

export default PlaceCards;
