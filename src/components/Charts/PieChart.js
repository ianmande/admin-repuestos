import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chart from 'chart.js';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  totalProduts: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

const PieChart = ({ data = {}, options = {} }) => {
  const [totalOfProducts, setTotalOfProducts] = useState(0);
  const classes = useStyles();
  const myCanvasChart = useRef(null);

  useEffect(() => {
    const products = data.datasets[0].data;

    setTotalOfProducts(products.reduce((acc, current) => acc + current));

    const chartCanvaContext = myCanvasChart.current.getContext('2d');

    new Chart(chartCanvaContext, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  }, [data, options, totalOfProducts]);

  return (
    <>
      <div className={classes.totalProduts}>
        <small>Total de productos</small>
        <h4>{totalOfProducts}</h4>
      </div>
      <div className={classes.root}>
        <canvas id="myChart" ref={myCanvasChart} width="480px" />
      </div>
    </>
  );
};

export default PieChart;
