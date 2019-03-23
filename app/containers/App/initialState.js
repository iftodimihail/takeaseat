/*
 * App initial state
 */

import { fromJS } from 'immutable';

export default fromJS({
  userType: null,
  token: null,
  user: null,
  language: 'en',
  checkToken: {
    error: null,
    loading: true,
    valid: false
  }
});
