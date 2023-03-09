import React from 'react'

const Card = ({data}) => {
  return (
    <div>
      <p>Hola {data.nombre}</p>
      <p>tu canción preferida es: {data.cancion}</p>

      <iframe 
        width="560" 
        height="315" 
        src={data.playList}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Card