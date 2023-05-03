

import './App.css';
import Hero from "./components/Hero";
import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";
import More from './components/More';
import CV from "./CV/CV";
import { useState } from "react";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {

  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
     
    <Hero hero={hero}/>
    <About hero={hero.aboutMe}/>
    <button class="boton" onClick={() => setShowEducation(true)}>Education</button>
    <button class="boton" onClick={() => setShowEducation(false)}>Experience</button>
    
    <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
    </div>

    <More languages={languages} habilities={habilities} volunteer={volunteer} />

    </div>
  );
}

export default App;
