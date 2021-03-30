// @Vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// @Components
import Header from 'components/Header';
import MenuLateral from 'components/Menu';

function AppFrame({ title = 'Not title assigned', children }) {
  return (
    // ** Caja principal en Grid
    <>
      <Helmet>
        <title>Repuestos | {title}</title>
        {/* <link rel="icon" type="image/jpg" href={FAVICO} sizes="64x64" /> */}
      </Helmet>
      <Header />
      <div className="app__layout">
        <MenuLateral />
        <main role="main">{children}</main>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default React.memo(AppFrame);
