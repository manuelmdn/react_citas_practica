import React from 'react';

const Cita = ({cita,eliminarCita}) => {
    return (  
        <div className="cita">
            <p>Nombre: <span>{cita.nombre}</span></p>
            <button 
            className="buttom eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}
            >Eliminar &times;
            </button>
        </div>
    );
}
 
export default Cita;