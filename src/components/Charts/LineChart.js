import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chart from 'chart.js';

const useStyles = makeStyles({
  root: {
    height: '90%',
  },
});

const LineChart = ({ data = {}, options = {} }) => {
  const classes = useStyles();
  const myCanvasChart = useRef(null);

  useEffect(() => {
    const chartCanvaContext = myCanvasChart.current.getContext('2d');

    new Chart(chartCanvaContext, {
      type: 'line',
      data: data,
      options: options,
    });
  }, [data, options]);

  return (
    <div className={classes.root}>
      <canvas id="myChart" ref={myCanvasChart} />
    </div>
  );
};

export default LineChart;
