import React from 'react';

//styles
import styles from './styles.module.scss';

const index = ({ col, row = 1, children }) => {
  return (
    <div
      className={styles.card__dash}
      style={{
        gridColumn: `span ${col}`,
        gridRow: `span ${row}`,
      }}
    >
      <div className={styles.card__content}>{children}</div>
    </div>
  );
};

export default index;
