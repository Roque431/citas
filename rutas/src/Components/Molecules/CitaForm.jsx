import React, { useState } from 'react';
import InputText from '../Atoms/InputText';
import CustomDatePicker from '../Atoms/DatePicker';
import Button from '../Atoms/Button';
import "./citas.css";

const CitaForm = ({ onAddCita, Titulos }) => {
  const [username, setUsername] = useState('');
  const [petName, setPetName] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [Motivo, setMotivo] = useState('');
  const [LugarConsulta, setLugarConsulta] = useState('');

  const handleAddCita = () => {
    // Lógica para agregar la cita
    const nuevaCita = {
      username,
      petName,
      fecha,
      hora,
      Telefono,
      codigoPostal,
      Direccion,
      Descripcion,
      Motivo,
      LugarConsulta
    };

    // Enviar la nueva cita a la API
    fetch('http://localhost:8080/api/citaUsuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaCita),
    })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta de la API
        console.log('Respuesta de la API:', data);
        // Llamada a la función proporcionada para manejar la nueva cita
        onAddCita(nuevaCita);
      })
      .catch(error => {
        console.error('Error al enviar la solicitud a la API:', error);
      });
  };

  return (
    <div className='cita-form-container'>
      {Titulos.map((titulo, index) => (
        <h2 key={index}>{titulo.Titulo}</h2>
      ))}
      <InputText label="Nombre del Cliente" value={username} onChange={(e) => setUsername(e.target.value)} />
      <InputText label="PetName" value={petName} onChange={(e) => setPetName(e.target.value)} />
      <InputText label="Fecha" value={fecha} type="date" onChange={(e) => setFecha(e.target.value)} />
      <InputText label="Hora" type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
      <InputText label="Teléfono" type="number" value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
      <InputText label="Codigo postal" type="number" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
      <InputText label="Dirección" value={Direccion} onChange={(e) => setDireccion(e.target.value)} />
      <InputText label="Descripción del Motivo" value={Descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <InputText label="Motivo" value={Motivo} onChange={(e)=> setMotivo(e.target.value)}/>
      <InputText label="Lugar" value={LugarConsulta} onChange={(e) => setLugarConsulta(e.target.value)} />
      <Button onClick={handleAddCita}>Agendar Cita</Button>
    </div>
  );
};

export default CitaForm;
