import React from 'react';
import ReactDOM from 'react-dom/client'
import { useState } from "react"

function EducationActiveSegment({education, accentColor}){
    return (
        <>  
            <div className="edu-segment">
                <p className="degree-name">{education.uniTitle.uniTitle}</p>
                <p style={{color: `${accentColor}`}} className="uni-name">{education.uniTitle.uniName}</p>
                <p className="edu-date">{education.uniTitle.startUniDate} - {education.uniTitle.endUniDate}</p>
            </div>        
        </>
    )
}
function EducationStaticSegment({educationCollection, removeEduSegment, accentColor}){
   
    return(
        educationCollection.map((element) => {
            return (
                <div key={element.uniTitle} className="edu-segment">
                    <div className="title-edu-segment">
                        <p className="degree-name">{element.uniTitle}</p>
                        <button onClick={()=>removeEduSegment(element.uniTitle)} className="remove-edu-segment"></button>
                    </div>
                    <p style={{color: `${accentColor}`}} className="uni-name">{element.uniName}</p>
                    <p className="edu-date">{element.startUniDate} - {element.endUniDate}</p>
                </div>     
            )
        })
    ) 
}
export default function EducationResume({education, educationCollection, emptyEducation, removeEduSegment, accentColor}){
    return (
        <>
        <div  className="education-box">
            <p style={{backgroundColor: `${accentColor}`}}className="education-info">Education</p>
            <div className="education-inside">
                <EducationStaticSegment accentColor={accentColor} educationCollection={educationCollection} removeEduSegment={removeEduSegment}></EducationStaticSegment>
                {emptyEducation && <EducationActiveSegment accentColor={accentColor} education={education}></EducationActiveSegment>}

            </div>
        </div>
        </>
    )
}