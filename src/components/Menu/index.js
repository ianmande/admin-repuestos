//vendors
import { LINKS_MENU } from 'constants/LinksMenu';
import React from 'react';

//Statics
import User from 'statics/images/logos/user.png';

//Constants
import ItemMenu from './ItemMenu';

//Styles
import styles from './styles.module.scss';

const index = () => {
  return (
    <aside className={styles.menu__layout}>
      <div className={styles.menu}>
        <div className={styles.user}>
          <figure className={styles.user__information}>
            <img src={User} alt="repuestos web " />
            <small className={styles.user__name}>Maria G. García</small>
          </figure>
        </div>
        <div className="menu-laterl">
          <ul>
            {LINKS_MENU.map(({ title, path }, index) => (
              <ItemMenu title={title} path={path} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default index;
