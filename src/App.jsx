import { useState } from 'react'
import Formulario from './components/Formulario.jsx'
//⚀ ⚁ ⚂ ⚃ ⚄ ⚅

const completo = {
  numeros: [1, 2, 3, 4, 5, 6],
  dados: ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"],
  textos: ["Mala suerte, sacaste 1", "Buen tiro!", "¡FELICIDADES! ¡Sacaste el mayor!"]
}

function App() {
  const [valor, setValor] = useState(0)
  const [datos, setDatos] = useState({ nombre: '', apellido: '', edad: '' })
  const [jugador, setJugador] = useState(null)

  const lanzarDado = () => {
    setValor(Math.floor(Math.random() * 6))
    setJugador(datos)
  }

  return (
    <>
      <section id="Contenedor">
        <h1>Simulador de Dado</h1>
        <Formulario datos={datos} setDatos={setDatos} />
        <h1>{completo.dados[valor]}</h1>
        <h2>Te tocó: {completo.numeros[valor]}</h2>
        {valor >= 1 && valor <= 4 ? (
          <h3>{completo.textos[1]}</h3>
        ) : null}
        {valor === 0 ? (
          <h3>{completo.textos[0]}</h3>
        ) : null}
        {valor === 5 ? (
          <h3>{completo.textos[2]}</h3>
        ) : null}
        <button onClick={lanzarDado}>Tirar Dado</button>
        {jugador ? (
          <div className="jugador">
            <h3>Jugador</h3>
            <p>Nombre: {jugador.nombre}</p>
            <p>Apellido: {jugador.apellido}</p>
            <p>Edad: {jugador.edad}</p>
          </div>
        ) : null}
      </section>
    </>
  )
}

export default App;