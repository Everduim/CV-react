import React from 'react'
import "../components/About.scss"
import CV from '../CV/CV'

const About = ({hero}) => {
  return (
    <div class="sobreMi">
      <h2 class="titulo-sobreMi">Sobre mi</h2>
      <ul>
      {CV.hero.aboutMe.map((item, index) => (
        <li class="sobreMi-li" key={index}>{item.info}</li>
        ))}
      </ul>

    </div>
  )
}

export default About