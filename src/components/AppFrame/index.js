// @Vendors
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

// @Components
import Header from 'components/Header';
import MenuLateral from 'components/Menu';

// constante que se usa para la animacion y tamaño del drawer
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  main__layout: {
    maxWidth: '1200px',
    margin: '50px auto 0 auto',
    padding: '1.5em',
  },
}));

function AppFrame({ title = 'Not title assigned', children }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    // ** Caja principal en Grid
    <>
      <Helmet>
        <title>Repuestos | {title}</title>
        {/* <link rel="icon" type="image/jpg" href={FAVICO} sizes="64x64" /> */}
      </Helmet>
      <Header
        drawerWidth={drawerWidth}
        handleOpen={handleDrawerOpen}
        state={open}
      />
      <div className="app__layout">
        <MenuLateral
          drawerWidth={drawerWidth}
          handleClose={handleDrawerClose}
          state={open}
        />
        <main
          role="main"
          className={`${classes.content} ${open && classes.contentShift}`}
        >
          <div className={classes.main__layout}>{children}</div>
        </main>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default React.memo(AppFrame);
