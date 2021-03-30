// @Vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// @Material UI

function NotFoundFrame({ title = 'Not title assigned', children }) {
  return (
    // ** Caja principal en Grid
    <div>
      <Helmet>
        <title>Repuestos | {title}</title>
        {/* <link rel="icon" type="image/jpg" href={FAVICO} sizes="64x64" /> */}
      </Helmet>
      <main role="main">Not Found</main>
    </div>
  );
}

export default React.memo(NotFoundFrame);
