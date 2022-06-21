import React from 'react'
import { Link } from 'react-router-dom'

const Presentacion = () => {
  return (
    <div>
        <div className='presentacion-container'>
            <div className='container-titulo'><h1 className='presentacion-titulo'>¡Hola, soy Allan!</h1></div>
            <div className='container-subtitulo'><h2 className='presentacion-subtitulo'>Técnico universitario en computación e informática, UBB, Concepción</h2></div>
            <div className='container-parrafo'><p className='presentacion-parrafo'>Resuelvo problemas, me gusta la matematica, las ciencias y tecnologia y espero aportar para hacer del mundo un lugar un poco mejor para todos</p></div>
            <div className='container-boton'>
                <Link to='/contactar'><button className='presentacion-boton'>Contactar</button></Link>
                <Link to='/mas-info'><button className='presentacion-boton'>Mas info</button></Link>
            </div>
        </div>

    </div>
  )
}

export default Presentacion