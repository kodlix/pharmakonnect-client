import React from 'react';
import { Route, Redirect } from 'react-router';
import '@pwabuilder/pwainstall'

import agent from '../../agent';
import AppNavBar from '../Shared/AppNavBar';

import AppMain from '../Shared/AppMain';

const ProtectedRoute = ({ showHead = true,  children, ...rest }) => {
  if (agent.Auth.isAuth()) {
    return (
      <>
        {
          showHead && <>
            <AppNavBar />
            <AppMain>
              <Route {...rest} >
                {children}
              </Route>
            </AppMain>
          </>
        }
        {
          !showHead &&
          <Route {...rest} >
            {children}
          </Route>
        }

      </>
    )
  } else {
    return <Redirect to={{ pathname: "/login" }} />
  }
}

export default ProtectedRoute;