import { useState } from 'react'
//⚀ ⚁ ⚂ ⚃ ⚄ ⚅

const completo = {
  numeros: [1, 2, 3, 4, 5, 6],
  dados: ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"],
  textos: ["Mala suerte, sacaste 1", "Buen tiro!", "¡FELICIDADES! ¡Sacaste el mayor!"]
}

function App() {
  const [valor, setValor] = useState(0)
  return (
    <>
      <section id="Contenedor">
        <h1>Simulador de Dado</h1>
        <h1>{completo.dados[valor]}</h1>
        <h2>Te tocó: {completo.numeros[valor]}</h2>
        {valor >= 1 && valor <= 4 ? (
          <h3>{completo.textos[1]}</h3>
        ): null}
        {valor === 0 ? (
          <h3>{completo.textos[0]}</h3>
        ): null}
        {valor === 5 ? (
          <h3>{completo.textos[2]}</h3>
        ): null}
        <button onClick={() => setValor(Math.floor(Math.random() * 6))}>Tirar Dado</button>
      </section>
    </>
  )
}

export default App;