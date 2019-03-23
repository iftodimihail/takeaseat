import { connect } from 'react-redux';
import { compose } from 'redux';
import LoginForm from './components/Form';
import { loginStart } from './actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

const mapDispatchToProps = (dispatch) => ({
  onLogin: (credentials) => dispatch(loginStart(credentials))
});

const mapStateToProps = (state) => {
  const login = state.get('login');
  return {
    error: login.get('error'),
    loading: login.get('loading')
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'login', saga });
const withReducer = injectReducer({ key: 'login', reducer });

export default compose(withReducer, withSaga, withConnect)(LoginForm);
