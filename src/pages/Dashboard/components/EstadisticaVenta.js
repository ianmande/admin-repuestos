import React from 'react';

//Components
import CardDash from 'components/CardDash';
import LineChart from 'components/Charts/LineChart';

//Constants
import { DataLineChart } from 'constants/DataChart';

const EstadisticaVenta = ({ styles }) => {
  return (
    <CardDash col={2} row={2}>
      <div className={styles.estadisticas}>
        <h3 className={styles.estadisticas__title}>Estadísticas de venta</h3>
      </div>
      <LineChart
        data={DataLineChart}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Tiempo',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Ganacia',
              },
            },
          },
        }}
      />
    </CardDash>
  );
};

export default EstadisticaVenta;
