import React from 'react'
import "../components/Experience.scss"

const Experience = ({experience}) => {
  return (
    <div>
      
      <div>
      {experience.map((item)=>{
            return (
              <div key={JSON.stringify(item)}>
                <p className="name">{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
                </div>
            );
          })}
        </div>
        
      </div>
      );
  };

export default Experience