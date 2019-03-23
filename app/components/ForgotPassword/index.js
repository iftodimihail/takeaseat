import { connect } from 'react-redux';
import { compose } from 'redux';
import ForgotPasswordForm from './components/Form';
import { forgotPasswordStart } from './actions';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import saga from './saga';
import reducer from './reducer';

const mapDispatchToProps = (dispatch) => ({
  onForgotPassword: (email, userType) => dispatch(forgotPasswordStart(email, userType))
});

const mapStateToProps = (state) => {
  const forgotPassword = state.get('forgot-password');
  return {
    error: forgotPassword.get('error'),
    loading: forgotPassword.get('loading')
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'forgot-password', saga });
const withReducer = injectReducer({ key: 'forgot-password', reducer });

export default compose(withReducer, withSaga, withConnect)(ForgotPasswordForm);
