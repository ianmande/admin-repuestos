import React from 'react';
import { makeStyles } from '@material-ui/core';

//styles
import styles from './styles.module.scss';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    gridColumn: 'span 2',
    [theme.breakpoints.up('sm')]: {
      gridColumn: (props) => `span ${props.col}`,
      gridRow: (props) => `span ${props.row}`,
    },
  },
}));

const Index = ({ col, row = 1, children }) => {
  const classes = useStyles({ col, row });

  return (
    <div className={`${styles.card__dash} ${classes.cardGrid}`}>
      <div className={styles.card__content}>{children}</div>
    </div>
  );
};

export default Index;

// import React from 'react';
// import { makeStyles } from '@material-ui/core';

// //styles
// import styles from './styles.module.scss';
// const useStyles = makeStyles({
//   cardGrid: {
//     gridColumn: (props) => props.col,
//     gridRow: (props) => props.row,
//   },
// });

// const Index = ({ col = 1, row = 1, children }) => {
//   const classes = useStyles({ col, row });
//   return (
//     <div className={`${styles.card__dash} ${classes.cardGrid}`}>
//       <div className={styles.card__content}>{children}</div>
//     </div>
//   );
// };

// export default Index;
