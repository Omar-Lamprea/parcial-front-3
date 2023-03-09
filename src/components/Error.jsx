import React from 'react'

const Error = () => {
  return (
    <div className='Error'>
      <h3>Por favor chequea que la información sea correcta:</h3>
      <ul>
        <li>
          <p>Tu nombre debe de contener por lo menos <strong>3</strong> caracteres</p>
        </li>
        <li>
          <p>El nombre de la canción debe de contener por lo menos <strong>6</strong> caracteres</p>
        </li>
      </ul>
    </div>
  )
}

export default Error