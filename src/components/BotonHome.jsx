import React from 'react'
import { Link } from 'react-router-dom'

const BotonHome = () => {
  return (

    <div className='container-boton-home'>
        <Link to='/'>
            <button className='boton-home'>Home</button>
        </Link>
    </div>

  )
}

export default BotonHome