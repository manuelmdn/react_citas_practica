import React, { Fragment, useState, useEffect } from 'react';
import Formulario  from './components/form';
import Cita  from './components/cita';

function App() {

  let citaslocal = JSON.parse(localStorage.getItem('citas'));
  if(!citaslocal) {
    citaslocal = [];
  }

  //recibe un array de citas
  const [citas, guardarCitas] = useState(citaslocal);

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  useEffect( ()=> {
    let citaslocal = JSON.parse(localStorage.getItem('citas'));
    if(citaslocal) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas] );


  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas);
  }

  const estatusPacientes = citas.length === 0 ? 'No hay citas' : 'Lista de Pacientes';
  return (
    <Fragment>
      <h1>
        Administrador de pacientes
      </h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
              
              crearCita={crearCita}

              />
          </div>
          <div className="one-half column">
            {

            }
            <h1>{estatusPacientes}</h1>
            {citas.map(cita=>(
              <Cita 
                key= {cita.id}
                cita= { cita}
                eliminarCita = {eliminarCita} 
              />
            ))}
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

