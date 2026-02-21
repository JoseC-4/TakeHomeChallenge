import React from 'react'



export default function Required({skills}) {
  return (
    <div>
        <ul className="list-disc">
            {skills.map((skill, key) => (
                <li>{skill}</li>
            ))}
        </ul>
    </div>
  )
}
