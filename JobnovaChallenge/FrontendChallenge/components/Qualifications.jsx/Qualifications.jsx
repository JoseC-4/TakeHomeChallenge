import React from 'react'
import "./Qualifications.css"
export default function Qualifications({qualifications}) {
  return (
             <div className='skillsContainer'>
                {qualifications.map((skills, idx) => (
                    <div key={idx} className="skills">{skills}</div>
                    ))}
              </div>
  )
}
