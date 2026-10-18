const Formulario = ({ datos, setDatos }) => {
  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  return (
    <div className="formulario">
      <h2>Datos del jugador</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={datos.nombre}
        onChange={manejarCambio}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={datos.apellido}
        onChange={manejarCambio}
      />
      <input
        type="number"
        name="edad"
        placeholder="Edad"
        value={datos.edad}
        onChange={manejarCambio}
      />
    </div>
  )
}

export default Formulario;