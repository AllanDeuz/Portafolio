import React from 'react'
import BotonHome from './BotonHome'

const MasInformacion = () => {
  return (


    <div className='informacion-container'>

      <div className='skills-container'>
        <div className='skills-elemento'>
          <h3 className='skills-titulo'>Lenguajes</h3>
          <ul className='skills-lista'>
            <li className='skills-item'>HTML</li>
            <li className='skills-item'>CSS</li>
            <li className='skills-item'>JavaScript</li>
            <li className='skills-item'>SQL</li>
            <li className='skills-item'>PHP</li>
            <li className='skills-item'>Java</li>
            <li className='skills-item'>Python</li>
          </ul>

          <h3 className='skills-titulo'>FrameWork</h3>
          <ul className='skills-lista'>
            <li className='skills-item'>React</li>
            <li className='skills-item'>Laravel</li>
            <li className='skills-item'>Express</li>
            <li className='skills-item'>MySQL</li>
            <li className='skills-item'>Bootstrap</li>
          </ul>

          <h3 className='skills-titulo'>Otros</h3>
          <ul className='skills-lista'>
            <li className='skills-item'>GitHub</li>
            <li className='skills-item'>Modelamiento de bases de datos</li>
            <li className='skills-item'>Conocimiento matematico</li>
          </ul>
        </div>
      </div>

      <div className='boton-home'>
        <BotonHome/>
      </div>

    </div>
  )
}

export default MasInformacion