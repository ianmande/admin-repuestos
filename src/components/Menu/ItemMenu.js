//Vendors
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

//Material-UI
import { Collapse, List, ListItem, makeStyles } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  subList: {
    width: '100%',
  },
  subListLink: {
    display: 'flex',
    width: '100%',
  },
}));

const ItemMenu = ({ title, path, subLinks = [] }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <li className={classes.subList}>
      {!subLinks.length ? (
        <Link to={path} className={classes.subListLink}>
          {title}
        </Link>
      ) : (
        <Link to={path} onClick={handleClick} className={classes.subListLink}>
          {title}
          {open ? <ExpandLess /> : <ExpandMore />}
        </Link>
      )}
      {subLinks.length ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {subLinks.length &&
            subLinks.map(({ title, path }, index) => (
              <List component="div" disablePadding key={index}>
                <ListItem button>
                  <Link to={path}>{title}</Link>
                </ListItem>
              </List>
            ))}
        </Collapse>
      ) : (
        ''
      )}
    </li>
  );
};

export default memo(ItemMenu);
