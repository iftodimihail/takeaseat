import { connect } from 'react-redux';
import { compose } from 'redux';
import Logout from './components/Logout';
import { logoutStart } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutStart())
});

const mapStateToProps = (state) => {
  const logout = state.get('logout');
  return {
    error: logout.get('error'),
    loading: logout.get('loading')
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'logout', saga });
const withReducer = injectReducer({ key: 'logout', reducer });

export default compose(withReducer, withSaga, withConnect)(Logout);
