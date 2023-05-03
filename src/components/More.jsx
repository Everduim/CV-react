import React from 'react'
import "../components/More.scss"

const More = ({languages,habilities,volunteer}) => {
  return (
    <div>
      <h2>Conocimientos</h2>
      
      <span><img class="iconos" src="../imagenes/icons8-html-5-48.png" alt="" />{habilities[0]}</span>
      <span><img class="iconos" src="../imagenes/icons8-css3-48.png" alt="" />{habilities[1]}</span>
      <span><img class="iconos" src="../imagenes/icons8-sass-48.png" alt="" />{habilities[2]}</span>
      <span><img class="iconos" src="../imagenes/icons8-javascript-48.png" alt="" />{habilities[3]}</span>
      <span><img class="iconos" src="../imagenes/icons8-angularjs-48.png" alt="" />{habilities[4]}</span>
      {/* <span><img class="iconos" src="" alt="" />{habilities[5]}</span>
      <span><img class="iconos" src="" alt="" />{habilities[6]}</span>
      <span><img class="iconos" src="" alt="" />{habilities[7]}</span> */}
      <h2>Idiomas</h2>
      <p>🇺🇸{languages.language}-B2</p>
      <p>🇪🇸{languages.español}-{languages.wrlevel}</p>
      
      


    </div>
  )
}

export default More