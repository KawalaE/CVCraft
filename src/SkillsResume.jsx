import { useState } from "react";


function SkillsActiveSegment({skills}){
    return (
        <>
            <div className="skills-segment">
                <p className="skill-name">{skills.skillName}</p>
                <p className="skill-desc">{skills.skillDescription}</p>
                {console.log(skills)}
            </div>
        </>
    )
}   
export default function SkillsResume({skills}){
    return (
        <>
            <div className="skill-box">
                <p className="skill-info">Skills</p>
                <SkillsActiveSegment skills={skills}/>
            </div>
        </>
    )
}