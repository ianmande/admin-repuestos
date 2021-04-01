//Vendors
import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core';

//material-ui
import ProgressCustom from 'components/ProgresCustom';

const COLOR__PROGRESS = {
  overSeventy: '#4ad987',
  overForty: '#37a8ff',
  lessForty: '#FFA833',
};

const useStyles = makeStyles(() => ({
  progress__categories: {
    height: '99%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 0',
  },
}));

const Index = ({ data = [] }) => {
  const classes = useStyles();

  //Saber el total de ventas
  let totalUnitsSell = 0;
  data.forEach((currentElement) => {
    totalUnitsSell += currentElement.units;
  });

  //La funcion percentageOfUnit es
  //determinar el porcentaje de la unidad respecto al total de las unidades vendidas
  const percentageOfUnit = useCallback(
    (units) => {
      //Aplico una regla de 3 para detenerminar
      //cuanto porciento representa la categoria actual
      const operation = (units * 100) / totalUnitsSell;
      return operation;
    },
    [totalUnitsSell]
  );

  const determinateColor = (percentage) => {
    let color = '';

    if (percentage >= 70) {
      color = COLOR__PROGRESS.overSeventy;
    } else if (percentage >= 40) {
      color = COLOR__PROGRESS.overForty;
    } else {
      color = COLOR__PROGRESS.lessForty;
    }
    return color;
  };

  return (
    <>
      {data.map(({ name, units }, index) => {
        const porcentage = percentageOfUnit(units);
        const colorBar = determinateColor(porcentage);

        return (
          <ProgressCustom
            name={name}
            porcenter={percentageOfUnit(units)}
            colorBars={colorBar}
            currentUnits={units}
            key={index}
          />
        );
      })}
    </>
  );
};

export default Index;
