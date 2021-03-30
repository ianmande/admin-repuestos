//vendors
import React from 'react';

//Statics
import Notificacion from 'statics/images/icons/Notification';
import Logo from 'statics/images/logos/logo-fondoClaro.png';
import User from 'statics/images/logos/user.png';

//Styles
import styles from './styles.module.scss';

const index = () => {
  return (
    <header className={`container__layout ${styles.head}`}>
      <div className={styles.head__dash}>
        <figure>
          <img src={Logo} alt="Logo de repuestos web" />
        </figure>
        <div className={styles.user}>
          <i className="user__icon">
            <Notificacion />
          </i>
          <figure>
            <small className={styles.user__name}>Maria G. García</small>
            <img src={User} alt="repuestos web " />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default index;
