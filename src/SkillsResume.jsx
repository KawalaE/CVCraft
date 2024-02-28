import { useState } from "react";


function SkillsActiveSegment({skills}){
    return (
        <>
            <div className="skills-segment">
                <p className="skill-name">{skills.skillName}</p>
                <p className="skill-desc">{skills.skillDescription}</p>
            </div>
        </>
    )
}
function SkillsStaticSegment({skillsCollection, removeSkills}){
    return (
        skillsCollection.map((element) => {
            return (
                <div className="skills-segment" key={element.skillName}>
                    <p className="skill-name">{element.skillName}</p>
                    <p className="skill-desc">{element.skillDescription}</p>
                    <button onClick={()=>removeSkills(element.skillName)}className="remove-skill-segment"></button>
                </div>
            )
        })
    )
    
   
}   
export default function SkillsResume({skills, skillsCollection, removeSkills, noSkills}){
    return (
        <>
            <div className="skill-box">
                <p className="skill-info">Skills</p>
                <div className="skills-collection">
                    <SkillsStaticSegment skillsCollection={skillsCollection} removeSkills={removeSkills}/>
                    {noSkills && <SkillsActiveSegment skills={skills}/>}
                </div>
                    
            </div>
        </>
    )
}