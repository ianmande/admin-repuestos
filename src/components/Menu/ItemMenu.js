//Vendors
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import SubItemMenu from './SubItemMenu';

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
        <>
          <Link to={path} onClick={handleClick} className={classes.subListLink}>
            {title}
            {open ? <ExpandLess /> : <ExpandMore />}
          </Link>
          <SubItemMenu listLinks={subLinks} state={open} />
        </>
      )}
    </li>
  );
};

export default memo(ItemMenu);
