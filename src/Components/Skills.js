import React from 'react'
import img2 from '../images/nskills.png'
import  "./SkillsStyles.css";

export default function Skills() {
  return (
    <>
    <div>
    <div className="skillcontainer">
        <h1 className="skilltitle">Skills</h1>
        <img src={img2} alt="skill" className="skillimage"/>
    </div>
    </div>
    </>
  )
}
