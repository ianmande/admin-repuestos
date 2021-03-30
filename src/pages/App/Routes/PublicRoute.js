// @Vendors
import React, { memo } from 'react';

// @Routes
import { Route } from 'react-router-dom';

// @Components
import AppFrame from 'components/AppFrame';

function PublicRoute({ component: Component, alias, ...rest } = {}) {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <AppFrame title={alias}>
          <Component {...routeProps} />
        </AppFrame>
      )}
    />
  );
}

export default memo(PublicRoute);
