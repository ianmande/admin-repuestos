//Vendors
import React from 'react';
import { Link } from 'react-router-dom';

//MAterial-ui
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const SubItemMenu = ({ listLinks = [], state }) => {
  return (
    <>
      <Collapse in={state} timeout="auto" unmountOnExit>
        {listLinks.map(({ title, path }, index) => (
          <List component="div" disablePadding key={`sub-menu-link-${index}`}>
            <ListItem button>
              <Link to={path}>{title}</Link>
            </ListItem>
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default SubItemMenu;
