import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';
import reducer from '../../Home/components/PlaceCards/reducer';
import saga from '../../Home/components/PlaceCards/saga';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import { addFilteredData, fetchAllPlacesStart, selectFilter } from '../../Home/components/PlaceCards/actions';
import Container from '../../ContainerPage';
import ContainerInner from '../../../components/ContainerInner';
import Footer from '../../../components/Footer';
import PageHeader from './PageHeader';
import List from './List';
import SidebarFilters from './SidebarFilters';
import { DAEMON } from '../../../utils/constants';
import ScrollToTop from '../../../components/ScrollToTop';
import Preloader from '../../../components/Preloader/components/Preloader';

/**
 * Localuri component
 */
class Localuri extends React.Component {
  state = {
    filterScreen: true
  };

  componentDidMount() {
    const { onFetch, location } = this.props;

    if (this.props.location.search && queryString.parse(location.search).nume) {
      onFetch(queryString.parse(location.search));
    } else {
      onFetch();
    }
  }

  showFilterScreen = () => this.setState({ filterScreen: true });

  showPlacesScreen = () => this.setState({ filterScreen: false });

  render() {
    return (
      <Container>
        <ScrollToTop />
        <Helmet>
          <title>Localuri</title>
        </Helmet>
        <PageHeader />
        <ContainerInner smallMargin>
          {this.props.loading ?
            <Preloader /> :
            <div className="flex" style={{ paddingTop: 100 }}>
              <SidebarFilters
                showPlacesScreen={this.showPlacesScreen}
                filterScreen={this.state.filterScreen}
                {...this.props}
              />
              <List
                showFilterScreen={this.showFilterScreen}
                filterScreen={this.state.filterScreen}
                {...this.props}
              />
            </div>
          }
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
    loading: placesState.get('loading'),
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
  onFetch: (filters = {}) => dispatch(fetchAllPlacesStart(filters)),
  onSelectFilter: (newFilter, data) => dispatch(selectFilter(newFilter, data)),
  onAddFilteredData: (filteredData) => dispatch(addFilteredData(filteredData))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'places', saga, mode: DAEMON });
const withReducer = injectReducer({ key: 'places', reducer });

export default compose(withReducer, withSaga, withConnect, withRouter)(Localuri);
