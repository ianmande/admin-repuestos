//vendors
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Statics
import Notificacion from 'statics/images/icons/Notification';
import Logo from 'statics/images/logos/logo-fondoClaro.png';
import User from 'statics/images/logos/user.png';

//Material-UI
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//Styles
import styles from './styles.module.scss';

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

const Index = ({ drawerWidth, handleOpen, state }) => {
  const classes = useStyles(drawerWidth);

  return (
    <AppBar
      position="fixed"
      className={`${classes.appBar} ${state && classes.appBarShift}`}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpen}
          edge="start"
          className={`${classes.menuButton} ${state && classes.hide}`}
        >
          <MenuIcon htmlColor="#000" />
        </IconButton>
        <div className={styles.head__dash}>
          <figure>
            <img src={Logo} alt="Logo de repuestos web" />
          </figure>
          <div className={styles.user}>
            <i className="user__icon">
              <Notificacion />
            </i>
            <figure className={styles.user__information}>
              <small className={styles.user__name}>Maria G. García</small>
              <img src={User} alt="repuestos web " />
            </figure>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
