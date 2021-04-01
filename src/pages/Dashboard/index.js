//vendors
import React from 'react';

//Components
import CardDash from 'components/CardDash';
import InventarioRepuestos from './components/InventarioHome';
import CategoriesBuys from 'components/CategoriesBuys';
import Mensajes from 'components/mensajes'

//styles
import styles from 'statics/styles/pages/dashboard.module.scss';

//statics
import { VENTAS_CATEGORIAS } from 'constants/VentasCategorias';
import EstadisticaVenta from './components/EstadisticaVenta';
import GraficosVentas from './components/GraficosVentas';

const index = () => {
  return (
    <>
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
        <EstadisticaVenta styles={styles} />

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
        <GraficosVentas styles={styles} />

        <CardDash col={1} row={2}>
          <div className={styles.progress}>
            <h3 className={styles.progress__title}>Categoria más vendida</h3>
            <CategoriesBuys data={VENTAS_CATEGORIAS} />
          </div>
        </CardDash>

        {/* fin Graficos */}
        <CardDash col={3} row={3} >
          <InventarioRepuestos />
        </CardDash>
        <CardDash col={3} row={4} >
          <Mensajes />
        </CardDash>

      </div>
    </>
  );
};

export default index;
