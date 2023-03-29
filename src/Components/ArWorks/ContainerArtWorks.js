import React, { useEffect, useState } from 'react'
import ArtWorks from './ArtWorks';

import './ContainerArtWorks.css'

const ContainerArtWorks = ({ artworks }) => {
  const [serieValue, setSerieValue] = useState(1);

  useEffect(() => {
    // Aquí puedes agregar la lógica que necesites para actualizar el componente cuando regresas al mismo desde el link del artista
  }, [serieValue]);

  const selectHandler = (e) => {
    setSerieValue(parseInt(e.target.value))
  }

  const artWorksMapped = artworks.filter(item => item.serie === serieValue).map((artwork) => (
    <ArtWorks
      key={artwork.id}
      title={artwork.artworkName }
      eds={artwork.eds}
      artist={artwork.artistName}
      linkUrl={artwork.linkUrl}
      img={artwork.img}
      url={artwork.url}
      serie={artwork.serie}
      blockchain={artwork.blockchain}
      cardNumber={artwork.cardNumber}
      id={artwork.id}
    />
  ));

  return (
    <>
      <div className="caja">
        <select onChange={selectHandler} value={serieValue}>
          <option value={0}>Originals</option>
          <option value={1}>Series 1</option>
        </select>
      </div>
      {
        artWorksMapped.length > 0 ? 
          <div className="artwork-container" >
            {artWorksMapped}
          </div >
        :
        <div className="artwork-container" >
          <h1 className='pruebaUSEEFFECR'>No se encontraron cartas.</h1>
        </div >
      }
    </>
  )
}

export default ContainerArtWorks;
