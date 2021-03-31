//vendors
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

//Components
import CardDash from 'components/CardDash';

//styles
import styles from 'statics/styles/pages/dashboard.module.scss';

//statics
import Pie from 'statics/images/Pie';
import imgEstadistica from 'statics/images/estadisticas.png';

const index = () => {
  return (
    <div className={styles.main__layout}>
      <h1 className={styles.main__layout__title}>Dashboard</h1>
      <div className={styles.admin__cards}>
        {/* incio saldo */}
        <CardDash col={1}>
          <div className={styles.saldo}>
            <small>Total de ganancia anual</small>
            <h4>$000.00</h4>
          </div>
        </CardDash>
        <CardDash col={1}>
          <div className={styles.saldo}>
            <small>Ordenes</small>
            <h4>00</h4>
          </div>
        </CardDash>
        <CardDash col={1}>
          <div className={styles.saldo}>
            <small>Ventas</small>
            <h4>000</h4>
          </div>
        </CardDash>
        {/* fin saldo */}

        {/* incio Estadisticas */}
        <CardDash col={2} row={2}>
          <div className={styles.estadisticas}>
            <h3 className={styles.estadisticas__title}>
              Estadísticas de venta
            </h3>
            <img src={imgEstadistica} alt="" />
          </div>
        </CardDash>

        <CardDash col={1} row={1}>
          <div className={styles.estadistias__saldo}>
            <h3 className={styles.estadisticas__saldo__title}>$000.00</h3>
            <small>Este mes</small>
          </div>
        </CardDash>

        <CardDash col={1} row={1}>
          <div className={styles.estadistias__saldo}>
            <h3 className={styles.estadisticas__saldo__title}>000,00 Bs</h3>
            <small>Este mes</small>
          </div>
        </CardDash>

        {/* fin Estadisticas */}

        {/* incio Graficos */}
        <CardDash col={2} row={2}>
          <div className={styles.graficos}>
            <h3 className={styles.graficos__title}>Producto más vendido</h3>
            <div className={styles.graficos__pie}>
              <Pie />
              <div className={styles.graficos__pie_result}>
                <small>Total de productos</small>
                <h4>544</h4>
              </div>
            </div>
          </div>
        </CardDash>

        <CardDash col={1} row={2}>
          <div className={styles.progress}>
            <h3 className={styles.progress__title}>Categoria más vendida</h3>
            <ProgressBar now={40} />
          </div>
        </CardDash>

        {/* fin Graficos */}
      </div>
    </div>
  );
};

export default index;
