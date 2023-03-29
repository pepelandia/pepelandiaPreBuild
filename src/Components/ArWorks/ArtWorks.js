import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
  } from 'reactstrap';


  import './ArtWorks.css'

const ArtWorks = ({title, eds, url, img, artist, serie, id, linkUrl, blockchain, cardNumber}) => {
  return (
    <div>
    <div id="artworks" className="container" >
    <Card key={id} color="light" className ="card"> 
        
        <a href={url} className="token-preview">
          <div className='asd'>
              <div className='holder'>
                  <img className='imagen' alt='Artworks about a pepe into a galery' src={img}></img>
              </div>
          </div>
        </a>
        

        <CardBody className='cardBody' > 

            <CardTitle className='cardTitle' tag="h5">{title}</CardTitle>

            
            <CardTitle className="cardArtist" tag="h5">
              <a className="cardArtist" tag="h5" href={linkUrl} > {artist} </a>
            </CardTitle>
            <div className='responsiveBox'>
              <CardTitle className="cardEds" tag="h5">Series: {serie === 0 ? "Original" : serie}</CardTitle> 
              <CardTitle className="cardEds" tag="h5">Card: {cardNumber}</CardTitle> 
              <CardTitle className="cardEds" tag="h5">Chain: {blockchain}</CardTitle> 
              <CardTitle className="cardEds" tag="h5">Eds: {eds}</CardTitle>
            </div>


        </CardBody>

    </Card>
    </div>
    </div>
  )
}

export default ArtWorks