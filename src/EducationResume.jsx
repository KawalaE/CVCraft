import { useState } from "react"



function EducationActiveSegment({education}){
    return (
        <>  
            <div className="edu-segment">
                <p className="degree-name">{education.uniTitle.uniTitle}</p>
                <p className="uni-name">{education.uniTitle.uniName}</p>
                <p className="edu-date">{education.uniTitle.startUniDate} - {education.uniTitle.endUniDate}</p>
            </div>        
        </>
    )
}
function EducationStaticSegment({educationCollection, removeEduSegment}){
   
    return(
        educationCollection.map((element) => {
            return (
                <div key={element.uniTitle} className="edu-segment">
                    <div className="title-edu-segment">
                        <p className="degree-name">{element.uniTitle}</p>
                        <button onClick={()=>removeEduSegment(element.uniTitle)} className="remove-edu-segment"></button>
                    </div>
                    <p className="uni-name">{element.uniName}</p>
                    <p className="edu-date">{element.startUniDate} - {element.endUniDate}</p>
                </div>     
            )
        })
    ) 
}
export default function EducationResume({education, educationCollection, emptyEducation, removeEduSegment}){
    return (
        <>
        <div className="education-box">
            <p className="education-info">Education</p>
            <div className="education-inside">
                <EducationStaticSegment educationCollection={educationCollection} removeEduSegment={removeEduSegment}></EducationStaticSegment>
                {emptyEducation && <EducationActiveSegment education={education}></EducationActiveSegment>}

            </div>
        </div>
        </>
    )
}