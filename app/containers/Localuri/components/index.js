import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import reducer from '../../Home/components/PlaceCards/reducer';
import saga from '../../Home/components/PlaceCards/saga';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import { fetchAllPlacesStart, selectFilter } from '../../Home/components/PlaceCards/actions';
import Container from '../../ContainerPage';
import ContainerInner from '../../../components/ContainerInner';
import Footer from '../../../components/Footer';
import PageHeader from './PageHeader';
import List from './List';
import SidebarFilters from './SidebarFilters';
import { DAEMON } from '../../../utils/constants';

/**
 * Localuri component
 */
class Localuri extends React.Component {
  componentDidMount() {
    const { data, onFetch } = this.props;
    if (isEmpty(data)) {
      onFetch();
    }
  }

  render() {
    return (
      <Container>
        <Helmet>
          <title>Localuri</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          <div className="flex" style={{ paddingTop: 100 }}>
            <SidebarFilters {...this.props} />
            <List {...this.props} />
          </div>
        </ContainerInner>
        <Footer />
      </Container>
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
    data: placesState.get('data').toJS(),
    filters: placesState.get('filters').toJS(),
    filteredData: placesState.get('filteredData').toJS()
  };
};

/**
 * Dispatch to props
 * @function mapDispatchToProps
 * @param  {function} dispatch
 * @returns {object} onLogin
 */
const mapDispatchToProps = (dispatch) => ({
  onFetch: () => dispatch(fetchAllPlacesStart()),
  onSelectFilter: (newFilter, data) => dispatch(selectFilter(newFilter, data))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'places', saga, mode: DAEMON });
const withReducer = injectReducer({ key: 'places', reducer });

export default compose(withReducer, withSaga, withConnect)(Localuri);
