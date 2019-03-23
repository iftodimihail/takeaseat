import { compose } from 'redux';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import App from './components/App';

const withSaga = injectSaga({ key: 'app', saga });

export default compose(withSaga)(App);
