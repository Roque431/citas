
import React, { useState } from 'react';
import CitaForm from '../Molecules/CitaForm';
import CitaList from '../Molecules/CitaList';
import database from '../../apiNombres/database';

function App() {
  const [citas, setCitas] = useState([]);

  const handleAddCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <div>
      
      <CitaForm onAddCita={handleAddCita} Titulos={database.titulos} />
      
      <CitaList citas={citas} />
    </div>
  );
}

export default App;
