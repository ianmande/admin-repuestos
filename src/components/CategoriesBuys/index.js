//Vendors
import React, { useCallback } from 'react';

//material-ui
import ProgressCustom from 'components/ProgresCustom';

//helpers
import { determinateColor } from 'helpers';

const Index = ({ data = [] }) => {
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
