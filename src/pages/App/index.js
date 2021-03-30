import React from 'react';
import { Switch } from 'react-router';

//Route
import PublicRoute from './Routes/PublicRoute';

//pages
import Dashboard from 'pages/Dashboard';

function App() {
  return (
    <Switch>
      {/* RUTAS USUARIOS */}

      <PublicRoute exact path="/" alias="Dashboard" component={Dashboard} />

      {/* <NotFoundRoute
    alias="Pagina no encotrada"
    component={<h1>Page Not Found</h1>}
  /> */}
    </Switch>
  );
}

export default App;
