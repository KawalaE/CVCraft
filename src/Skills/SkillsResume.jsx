import React from 'react';
import ReactDOM from 'react-dom/client'
import { useState } from "react";


function SkillsActiveSegment({skills, accentColor}){
    return (
        <>
            <div className="skills-segment">
                <p style={{color: `${accentColor}`}} className="skill-name">{skills.skillName}</p>
                <p className="skill-desc">{skills.skillDescription}</p>
            </div>
        </>
    )
}
function SkillsStaticSegment({skillsCollection, removeSkills, accentColor}){
    return (
        skillsCollection.map((element) => {
            return (
                <div className="skills-segment" key={element.skillName}>
                    <p style={{color: `${accentColor}`}} className="skill-name">{element.skillName}</p>
                    <p className="skill-desc">{element.skillDescription}</p>
                    <button onClick={()=>removeSkills(element.skillName)}className="remove-skill-segment"></button>
                </div>
            )
        })
    )
    
   
}   
export default function SkillsResume({skills, skillsCollection, removeSkills, noSkills, accentColor}){
    return (
        <>
            <div className="skill-box">
                <p style={{backgroundColor: `${accentColor}`}} className="skill-info">Skills</p>
                <div className="skills-collection">
                    <SkillsStaticSegment accentColor={accentColor} skillsCollection={skillsCollection} removeSkills={removeSkills}/>
                    {noSkills && <SkillsActiveSegment accentColor={accentColor} skills={skills}/>}
                </div>
                    
            </div>
        </>
    )
}