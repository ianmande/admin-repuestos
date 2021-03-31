//vendors
import React from 'react';
import { makeStyles } from '@material-ui/core';

//Material-ui
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  categoryName: {
    marginBottom: '15px',
    fontSize: '14px',
    letterSpacing: '-0.28px',
    color: '#B3B8BD',
  },
  categoriesSold: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#52575D',

    position: 'absolute',
    top: 0,
    right: 0,
  },
  colorPrimary: {
    backgroundColor: '#F5F5F5',
    height: '8px',
    borderRadius: '5px',
  },
  bar1Determinate: {
    backgroundColor: (props) => props.colorBars,
    borderRadius: '5px',
  },
});

const Index = ({ name, porcenter = 0, currentUnits, colorBars = 'blue' }) => {
  const classes = useStyles({ colorBars });

  return (
    <div className={classes.root}>
      <h6 className={classes.categoryName}>{name}</h6>

      <LinearProgress
        variant="determinate"
        value={porcenter}
        classes={{
          bar1Determinate: classes.bar1Determinate,
        }}
        className={classes.colorPrimary}
      />

      <p className={classes.categoriesSold}>{currentUnits}</p>
    </div>
  );
};

export default Index;
