import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: ' 2rem ',

    },
    img: {
        height: '75px',
        width: '75px',
        alignSelf: 'center',
        '& img': {
            width: '100%',
            borderRadius: '50%',
            height: '100%'
        }
    },
    linea: {
        gridColumn: '1/-1'
    }





});
function Mensaje({ datos: { id, mensaje, nombre, fecha, img } }) {
    const classes = useStyles();
    return (
        <>
            <article className={classes.root}>
                <figure className={classes.img}><img src={img} alt="" /></figure>
                <div>
                    <h4>{nombre}</h4>
                    <span>{'#' + id}</span>
                    <p>{mensaje}</p>
                    <p>{`Ultima respuesta ${fecha}`}</p>
                </div>
                <hr className={classes.liena} />
            </article>

        </>
    )
}

export default Mensaje
