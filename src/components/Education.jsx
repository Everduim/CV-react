import React from 'react'
import "../components/Education.scss"
const Education = ({education}) => {
  return (
    <div>
      <div>
      {education.map((item)=>{
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">{item.name}</p>
              <p>{item.date}</p>
              </div>
          );
        })}
      </div>
      
    </div>
    );
};

export default Education