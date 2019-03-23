/**
 * App config
 */

export default {
  raven: {
    ravenUrl: 'http://a9852c792da841d4a39a87d38cd997d6@sentry.digitalya.ro/55',
    whitelistUrls: [/eternal\.digitalya\.ro/]
  },
  apiUrl: (process.env.NODE_ENV === 'production') ? 'https://eternal-api.digitalya.ro/api/' : 'http://127.0.0.1:8000/api/',
  itemsPerPage: 10,
  generalError: {
    unknownError: ['An unknown error has occurred']
  },
  homepage: '/',
  storeKey: {
    userType: 'app-user-type',
    token: 'app-token',
    user: 'app-user'
  }
};