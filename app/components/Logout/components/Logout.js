import React from 'react';
import { Button } from 'antd';

const logout = (props) => () => {
  props.logout();
};

/**
 * Logout
 * @function Logout
 * @param  {object} props: { loading }
 * @description Logout component
 */
const Logout = (props) => (
  <Button onClick={logout(props)} disabled={props.loading} loading={props.loading}>Logout</Button>
);

export default Logout;
