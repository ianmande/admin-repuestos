//Vendors
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { withStyles, makeStyles } from '@material-ui/core/styles';

//Material-ui
import {
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from '@material-ui/core';

//Components
import ProgresIndividual from 'components/progresIndividual';
//
import { determinateColor } from 'helpers';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F8F8F8',
    color: '#707070',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  titulo: {
    color: '#6a6a6a',
    padding: '1em',
  },
  paper: {
    padding: '1em',
  },
});

function createData(
  nombre,
  disponibilidad,
  categoria,
  precio,
  cantidad,
  publicado
) {
  return { nombre, disponibilidad, categoria, precio, cantidad, publicado };
}

const rows = [
  createData('Neumático', 100, 'Neumaticos', '00', 25, true),
  createData('Neumático', 70, 'Neumaticos', '00', 25, true),
  createData('Neumático', 10, 'Neumaticos', '00', 25, true),
  createData('Neumático', 50, 'Neumaticos', '00', 25, true),
];

function InventarioHome({ col, row = 1 }) {
  const classes = useStyles();

  return (

    <div>
      <h3 className={classes.titulo}>Inventario</h3>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Disponibilidad</StyledTableCell>
              <StyledTableCell align="right">Categoria</StyledTableCell>
              <StyledTableCell align="right">Precio</StyledTableCell>
              <StyledTableCell align="right">Cantidad</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.nombre}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <ProgresIndividual
                    color={determinateColor(row.disponibilidad)}
                    valor={row.disponibilidad}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.categoria}
                </StyledTableCell>
                <StyledTableCell align="right">{row.precio}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.cantidad}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.publicado ? (
                    <Alert severity="success">Publicado</Alert>
                  ) : (
                    <Alert severity="error">No Publicado</Alert>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default InventarioHome;
