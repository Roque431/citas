import React from 'react';
import "./citas.css"
const CitaList = ({ citas }) => {
  return (
    <div className='cita-list-container'>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map((cita, index) => (
          <li key={index}>
            <strong>Cliente:</strong> {cita.nombre}, <strong>Mascota:</strong> {cita.mascota},{' '}
            <strong>Fecha:</strong> {cita.fecha.toDateString()}, <strong>Hora:</strong> {cita.hora},{' '}
            <strong>Teléfono:</strong> {cita.telefono}, <strong>codigo postal:</strong> {cita.codigoPosta},{' '}
            <strong>Dirección:</strong> {cita.direccion}, <strong>Motivo:</strong> {cita.motivo},{' '}
            <strong>Lugar:</strong> {cita.lugar}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitaList;
