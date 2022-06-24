import React from 'react'
import BotonHome from './BotonHome'

const Contacto = () => {
  return (
    <div>
      <div className='contacto'>  
        <div className='contacto-elemento'>

          <a href='https://github.com/AllanDeuz' target='_blank' rel='noopener noreferrer'>
            <h3 className='github'></h3>
          </a>

          <a href='https://www.linkedin.com/in/allan-arroyo-programador/' target ='_blank'>
            <h3 className='linkedin'></h3>
          </a>

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