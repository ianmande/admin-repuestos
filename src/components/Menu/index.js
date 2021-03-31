//vendors
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';

//Statics
import User from 'statics/images/logos/user.png';

//Components Material
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

//Componetns
import ItemMenu from './ItemMenu';

//Constants
import { LINKS_MENU } from 'constants/LinksMenu';

//Styles
import styles from './styles.module.scss';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    padding: '10px 1.5em',
    width: theme.drawerWidth,
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const Index = ({ drawerWidth, state, handleClose }) => {
  const classes = useStyles(drawerWidth);
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={state}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>

      <div className={styles.menu}>
        <div className={styles.user}>
          <figure className={styles.user__information}>
            <img src={User} alt="repuestos web " />
            <small className={styles.user__name}>Maria G. García</small>
          </figure>
        </div>
      </div>
      <List>
        {LINKS_MENU.map(({ title, path }, index) => (
          <ListItem button key={index}>
            <ItemMenu title={title} path={path} key={index} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Index;
