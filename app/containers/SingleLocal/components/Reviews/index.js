import React from 'react';
import isEmpty from 'lodash/isEmpty';
import SingleReview from './SingleReview';
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
        {(!isEmpty(this.state.reviews) &&
        this.state.reviews.map((review) => <SingleReview key={review.id} {...review} />)) ||
        <div className="no-reviews">Localul nu a prmit nici o recenzie încă</div>}
      </div>
    );
  }
}

export default Reviews;
