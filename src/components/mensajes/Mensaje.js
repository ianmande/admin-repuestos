import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: ' 2rem ',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "auto 1fr ",
        },

    },
    mensajes_root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em'
    }
    ,
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
    nombre: {
        color: '#1E130F',
        fontWeight: 'medium',
        fontSize: '16px'
    },
    mensaje: {
        color: '#1E130F',
        fontWeight: '100',
        fontSize: '14px'
    },
    fecha: {
        color: '#6A6A6A',
        fontSize: '12px',
        fontWeight: '100',
    },
    linea: {
        gridColumn: '1/-1',
        color: '#dddddd70',
        marginBottom: '1rem'
    },
    boton: {
        alignSelf: "center",
        ' & >.MuiButtonGroup-root> .MuiButtonBase-root ': {
            background: '#3E29A3',
            color: '#fff'
        },
        [theme.breakpoints.down('sm')]: {
            gridColumn: '1/-1',
            justifySelf: 'flex-end'
        },
    },


}));

const options = ['Administrar', 'Eliminar', 'Mostrar'];
function Mensaje({ datos: { id, mensaje, nombre, fecha, img } }) {

    const classes = useStyles();


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`le distes click ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <article className={classes.root}>
                <figure className={classes.img}><img src={img} alt="" /></figure>
                <div className={classes.mensajes_root}>
                    <h4 className={classes.nombre}>{nombre} <i>{'#' + id}</i></h4>

                    <p className={classes.mensaje}>{mensaje}</p>
                    <p className={classes.fecha}>{`Ultima respuesta ${fecha}`}</p>
                </div>
                <div className={classes.boton}>
                    <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                        <Button

                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id="split-button-menu">
                                            {options.map((option, index) => (
                                                <MenuItem
                                                    key={option}
                                                    selected={index === selectedIndex}
                                                    onClick={(event) => handleMenuItemClick(event, index)}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
                <hr className={classes.linea} />
            </article>

        </>
    )
}

export default Mensaje
