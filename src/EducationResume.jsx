import { useState } from "react"



function EducationActiveSegment({education}){
    return (
        <>  
            <div className="edu-segment">
                <p className="degree-name">{education.uniTitle.uniTitle}</p>
                <p>{education.uniTitle.uniName}</p>
                <p className="edu-date">{education.uniTitle.startUniDate} - {education.uniTitle.endUniDate}</p>
            </div>        
        </>
    )
}
function EducationStaticSegment({educationCollection}){
    return(
        educationCollection.map((element) => {
            return (
                <>  
                    <div className="edu-segment">
                        <p className="degree-name">{element.uniTitle}</p>
                        <p>{element.uniName}</p>
                        <p className="edu-date">{element.startUniDate} - {element.endUniDate}</p>
                    </div>        
                </>
            )
        })
    ) 
}
export default function EducationResume({education, educationCollection, emptyEducation}){
    return (
        <>
        {console.log(emptyEducation)}
        <div className="education-box">
            <p className="education-info">Education</p>
            <div className="education-inside">
                <EducationStaticSegment educationCollection={educationCollection}></EducationStaticSegment>
                {console.log(emptyEducation)}
                {emptyEducation && <EducationActiveSegment education={education}></EducationActiveSegment>}
            </div>
        </div>
        </>
    )
}