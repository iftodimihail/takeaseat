import React from 'react';
import SingleReview from './SingleReview';

/**
 * Reviews component
 */
class Reviews extends React.Component {
  render() {
    return (
      <div>
        <SingleReview />
        <SingleReview />
        <SingleReview />
      </div>
    );
  }
}

export default Reviews;
