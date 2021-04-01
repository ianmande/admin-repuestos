import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bar1Determinate: {
    backgroundColor: (props) => props.color,
    borderRadius: '5px',
  },
  colorPrimary: {
    backgroundColor: '#F5F5F5',
    height: '8px',
    borderRadius: '5px',
  },
});

function ProgresIndividual({ color, valor }) {
  console.log(valor);
  const classes = useStyles({ color });

  return (
    <LinearProgress
      variant="determinate"
      value={valor}
      classes={{
        bar1Determinate: classes.bar1Determinate,
      }}
      className={classes.colorPrimary}
    />
  );
}

export default ProgresIndividual;
