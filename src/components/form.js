import React, { Fragment, useState } from 'react';
import uuid from 'uuid';

const Form = ({crearCita}) => {

    //states
    const [cita,actualizarCita] = useState({
        nombre: '',
        edad:'',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false);    

    //Methods
    //Listener that change state value
    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    
    const { nombre, edad, fecha, hora, sintomas } = cita;

    const submitCita = (e)=> {
        e.preventDefault();

        //validate
        if(nombre.trim() === '' || edadtrim() != '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            console.log("Hay un error");
            actualizarError(true);
            return;
        }
        actualizarError(false);

        //Assign Id
        cita.id = uuid();        
        //console.log(cita);

        //almacenamos la cita en el array localstorage
        crearCita(cita);

        //reiniciamos los valores del state
        actualizarCita({
            nombre: '',
            edad: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    //View
    return (
        <Fragment>
        <h1>Formulario</h1>
        {  error ? <p className="alerta-error"> Todos los campos son obligatorios</p> : null
        }
        <form
         onSubmit={submitCita}
        >
            <label htmlFor="">Nombre</label>
            <input 
            type="text" 
            className="u-full-width"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={actualizarState}
            />

            <label htmlFor="">Edad</label>
            <input 
            type="text" 
            className="u-full-width"
            name="edad"
            placeholder="Edad"
            value={edad}
            onChange={actualizarState}
            />

            <label htmlFor="">Fecha</label>
            <input 
            type="date" 
            name="fecha"
            className="u-full-width"
            value={fecha}
            onChange={actualizarState}
            />

            <label htmlFor="">Hora</label>
            <input 
            type="time" 
            name="hora"
            className="u-full-width"
            value={hora}
            onChange={actualizarState}
            />

            <label htmlFor="">Síntomas</label>
            <textarea 
            name="sintomas" 
            id="" 
            cols="30" 
            rows="10" 
            className="u-full-width"
            value={sintomas}
            onChange={actualizarState}
            ></textarea>

            <button className="u-full-width button-primary">Agregar Cita</button>
        </form>
        </Fragment>
    );
}

export default Form;