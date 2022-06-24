import React from 'react'
import { Link } from 'react-router-dom'

const Presentacion = () => {
  return (
    <div>
      <div className='presentacion-container'>
        <div className='container-titulo'><h1 className='presentacion-titulo'>¡Hola, soy Allan!</h1></div>
        <div className='container-subtitulo'><h2 className='presentacion-subtitulo'>Técnico universitario en computación e informática, UBB, Concepción</h2></div>
        <div className='container-parrafo'><p className='presentacion-parrafo'>Resuelvo problemas, me gustan las matemáticas, las ciencias y tecnología y espero aportar para hacer del mundo un lugar mejor para todos</p></div>
        <div className='container-boton'>
          <Link to='/contactar'><button className='presentacion-boton'>Contactar</button></Link>
          <Link to='/saberes'><button className='presentacion-boton'>Saberes</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Presentacion