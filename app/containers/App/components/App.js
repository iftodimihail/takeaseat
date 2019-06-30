import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch } from 'react-router-dom';
import { GlobalPreloader } from '../../../components/Preloader';
import { ProtectedRoute, PublicRoute, UnauthenticatedRoute } from '../../../components/Access';

import Home from '../../Home';
import Localuri from '../../Localuri';
import SingleLocal from '../../SingleLocal';
import ReservationConfirm from '../../ReservationConfirm';
import NotFound from '../../NotFound';
import Login from '../../../components/Login';
import ForgotPassword from '../../ForgotPassword';
import ReviewForm from '../../ReviewForm';
import AdminPanel from '../../AdminPanel';

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s - Take A Seat" defaultTitle="Take A Seat">
      <meta name="description" content="Take A Seat application" />
    </Helmet>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/localuri" component={Localuri} />
      <PublicRoute path="/reviews/:reservationId" component={ReviewForm} />
      <ProtectedRoute type="admins" path="/reservations/:reservationId" component={ReservationConfirm} />
      <UnauthenticatedRoute type="admins" path="/admin/login" redirect="/admin" component={Login} />
      <ProtectedRoute type="admins" path="/admin" redirect="/admin/login" component={AdminPanel} />
      <UnauthenticatedRoute path="/forgot-password" component={ForgotPassword} />
      <PublicRoute path="/:localName" component={SingleLocal} />
      <PublicRoute path="" component={NotFound} />
    </Switch>
    <GlobalPreloader />
  </div>
);

export default App;
