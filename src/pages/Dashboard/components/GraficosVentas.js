import React from 'react';

//Components
import CardDash from 'components/CardDash';
import PieChart from 'components/Charts/PieChart';

//Constants
import { DataPieChart } from 'constants/DataChart';

const GraficosVentas = ({ styles }) => {
  return (
    <CardDash col={2} row={2}>
      <div className={styles.graficos}>
        <h3 className={styles.graficos__title}>Producto más vendido</h3>
        <div className={styles.graficos__pie}>
          <PieChart
            data={DataPieChart}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
            }}
          />
        </div>
      </div>
    </CardDash>
  );
};

export default GraficosVentas;
