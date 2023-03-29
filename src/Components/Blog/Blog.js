import React from 'react'

import './Blog.css'

const Blog = () => {
  
  return (
    <div className='body'>

        <div className='ContainerHeader'>
            <div className='headerPhoto'>
                <img 
                src='https://cdn.discordapp.com/attachments/914725743957778470/1088328863311994900/IMG_2054.png'
                className='AuthorPhoto'
                alt="Draw of the Autor Pepe-Peperson">
                
                </img>
            </div>

            <div className='header'>
                <h1 className='jerepNews'>Añe'ẽta</h1>
                <div className='InformationContainer'>
                <h3 className='edition'>Edition 1</h3>
                <h3 className='autorNews'>Autor: Usaug</h3>
                </div>

            </div>
        </div>

        <div>
          
        <h1 className='tituloColumna'>El Pepe y los granos de arena</h1>
        <p className='textBody'> A lo largo de muchos siglos los investigadores han atosigado sus mentes buscando respuestas al origen del pepismo. Muchas vertientes de conocimiento coinciden en la existencia de "Un Pepe" primigenio del cual surgieron sus respectivas derivaciones a lo largo del tiempo y el espacio. Pero ante la carencia de pruebas todo lo dicho se mantiene en tono de hipótesis.
          <br/> Cabe preguntarse: ¿Qué es el pepismo? ¿Qué es lo que pregona? ¿Quiénes son los pepistas y que hace falta para ser uno? Empecemos por decir que, en forma muy resumida, el pepismo es un sentimiento de identificación muy poderoso por todo aquello que se relacione con "El Pepe". El pepe como entidad unificadora de sentidos 
          puede adoptar tantas significancias como granos de arena hay en el mundo. No existe hasta el momento quien pueda en pocas palabras definir la sensación totalizadora en la que se sumerge el espíritu al lograr una conexión pepistica.  La conexión llega como un mensaje que aun sin ser decodificado en su totalidad conmueve
          partículas neuronales. 
          <br/> Pepista es todo aquel que por azar existencial se haya visto envuelto en esta inmersión de sentidos múltiples generados por las distintas formas que "El Pepe" adopta. 
          <br/> Así como existe un mas allá, los pepistas tienen la fuerte convicción de la existencia, también, de un mas acá. Detalle no menor, ya que, al encontrarse este giro copernicano en la observación del acá y el allá, se ha desbloqueado el uso de razonamiento que permitieron grandes avances en la comprensión de diversas áreas. Dicha observación del "Mas Acá" es atribuida a un gran maestro peperil de la antigüedad, "El Pepus Trimegistus", personaje del cual no se han conservado evidencias de su existencia terrenal. Todo lo que nos ha llegado de el no son más que conjuntos de enseñanzas a través de aforismos oraculares que sus discípulos bien se han encargado de interpretar. Ya ahondaremos más en esto en la próxima entrega.
        </p>
        </div>

    </div>
  )
}

export default Blog