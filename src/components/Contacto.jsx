import React from 'react'
import BotonHome from './BotonHome'

const Contacto = () => {
  return (
    <div>
      <div className='contacto'>
        <div className='contacto-elemento'><h1 className='contacto-titulo'>Contacto</h1></div>
        <div className='contacto-elemento'>
          <a href='https://www.linkedin.com/in/juan-jose-gonzalez-gonzalez-b9a8b817b/' target ='_blank'>
            <h3 className='linkedin'></h3>
          </a>
        </div>
        <div className='contacto-elemento'>
          <a href='mailto:tecontacto.programador@gmail.com'>
            <h3 className='correo'></h3>
          </a>
        </div>
      </div>

      <BotonHome/>
    </div>
  )
}

export default Contacto