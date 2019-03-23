/*
 * App Constants
 *
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */

export const CHECK_TOKEN_START = 'CHECK_TOKEN_START';
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_ERROR = 'CHECK_TOKEN_ERROR';

export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';

export const REMOVE_AUTH_DATA = 'REMOVE_AUTH_DATA';

