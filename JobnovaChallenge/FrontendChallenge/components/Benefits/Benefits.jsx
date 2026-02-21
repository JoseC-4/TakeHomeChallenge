import React from 'react'



export default function Benefits({skills}) {
  return (
    <div>
        <ul className="list-disc">
            {skills.map((skill, key) => (
                <li key={key} className="text-slate-900">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0">{skill.icon}</span>

                    <div className="min-w-0 flex-1">
                        <span className="font-semibold">{skill.title}:</span>{" "}
                        <span className="text-slate-700">{skill.description}</span>
                    </div>
                 </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
