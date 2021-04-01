import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';
import Mensaje from './Mensaje'

const useStyles = makeStyles({
    titulo: {
        color: "#6a6a6a",
        padding: "1em",
    }



});
function Index() {

    const MENSAJES = [
        {
            id: 1,
            nombre: "nombre",
            mensaje: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum nostrum culpa numquam nobis, dolores nam eos repudiandae corporis quo distinctio reprehenderit molestias nemo officia minima unde consectetur dolor perspiciatis!",
            fecha: '3 horas',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqMWOPbuZolCgjRsW9rjBf91QAzARJ9oDpQ&usqp=CAU"
        },
        {
            id: 2,
            nombre: "nombre",
            mensaje: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum nostrum culpa numquam nobis, dolores nam eos repudiandae corporis quo distinctio reprehenderit molestias nemo officia minima unde consectetur dolor perspiciatis!",
            fecha: '3 horas',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqMWOPbuZolCgjRsW9rjBf91QAzARJ9oDpQ&usqp=CAU"
        }
    ]

    const classes = useStyles();
    return (
        <section>
            <h3 className={classes.titulo}>Mensajes</h3>
            {MENSAJES.map(({ id, mensaje, nombre, fecha, img }) => (
                <Mensaje key={id} datos={{ mensaje, nombre, id, fecha, img }} />
            ))}
        </section>
    )
}

export default Index
