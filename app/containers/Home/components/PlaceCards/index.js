import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { compose } from 'redux';
import { connect } from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import injectSaga from '../../../../utils/injectSaga';
import injectReducer from '../../../../utils/injectReducer';
import PlaceCard from '../../../../components/PlaceCard/index';
import { fetchAllPlacesStart } from './actions';
import { DAEMON } from '../../../../utils/constants';

class PlaceCards extends React.Component {
  componentDidMount() {
    const { data, onFetch } = this.props;
    if (isEmpty(data)) {
      onFetch();
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div className="places">
        {!isEmpty(data) ? data.map((placeCard) => (
          <PlaceCard
            key={placeCard.id}
            name={placeCard.name}
            cardImage={placeCard.img}
            rate={Math.random() * 5}
            votes={Math.random() * 240}
          />)) : null}
      </div>
    );
  }
}

/**
 * State to props
 * @function mapStateToProps
 * @param  {function} state
 * @description Get state properties
 * @returns {object} data
 */
const mapStateToProps = (state) => {
  const placesState = state.get('places');

  return {
    data: placesState.get('data').toJS()
  };
};

/**
 * Dispatch to props
 * @function mapDispatchToProps
 * @param  {function} dispatch
 * @returns {object} onLogin
 */
const mapDispatchToProps = (dispatch) => ({
  onFetch: () => dispatch(fetchAllPlacesStart())
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'places', saga, mode: DAEMON });
const withReducer = injectReducer({ key: 'places', reducer });

export default compose(withReducer, withSaga, withConnect)(PlaceCards);
