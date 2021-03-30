// @Vendors
import React, { memo } from "react";


// @Routes
import { Route } from "react-router-dom"


// @Components
import NotFoundFrame from "components/AppFrame/NotFoundFrame"

function PublicRoute({ component: Component, alias, ...rest } = {}) {

  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <NotFoundFrame title={alias} >
          <Component {...routeProps} />
        </NotFoundFrame>
      )}
    />
  );
}

export default memo(PublicRoute);
