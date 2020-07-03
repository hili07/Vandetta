import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/AuthPage';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/DashboardPage';
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} /> 
      <Route path="/dashboard" component={Dashboard} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}

export default Route;