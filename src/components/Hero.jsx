import React from 'react'
import "../components/Hero.scss"

const Hero = ({hero}) => {
  return (
    <div class="hero">

     
    <img class="img-hero" src={hero.image} alt="" />
    <div class="info-hero">  
    <h3 class="h3-hero">{hero.city}</h3>
    <h3 class="h3-hero">📆 {hero.birthDate}</h3>
    <h3 class="h3-hero">📧 {hero.email}</h3>
    <h3 class="h3-hero">📱 {hero.phone}</h3>
    <h3 class="h3-hero">💾 {hero.gitHub}</h3>
    </div>

    </div>
  )
}

export default Hero