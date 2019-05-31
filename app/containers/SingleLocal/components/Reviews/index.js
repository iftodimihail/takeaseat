import React from 'react';
import SingleReview from './SingleReview';
import isEmpty from 'lodash/isEmpty';
import axios from '../../../../axios';

/**
 * Reviews component
 */
class Reviews extends React.Component {
  state = {
    reviews: {}
  };

  componentDidMount() {
    axios.get('/reviews', {
      params: {
        local_id: this.props.localId
      }
    })
      .then((res) => this.setState({ reviews: res.data.data }));
  }

  render() {
    return (
      <div>
        {!isEmpty(this.state.reviews) && this.state.reviews.map((review) => <SingleReview key={review.id} {...review} />)}
      </div>
    );
  }
}

export default Reviews;
