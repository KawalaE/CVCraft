import { useState } from "react";


function WorkActiveSegment({work, accentColor}){ 
    return (
        <div className="work-segment" >
            <p className="work-position">{work.positionName}</p>
            <div className="company-date">
                <p style={{color: `${accentColor}`}} className="work-company">{work.companyName}</p>
                <p className="work-date">{work.startWorkDate}-{work.endWorkDate}</p>
            </div>
            <p className="work-description">{work.jobDescription}</p>
        </div>
    )
}
function WorkStaticSegment({workCollection, removeWorkSegment, accentColor}){
    return (
        workCollection.map((element) => {
           return(
            <div className="work-segment" key={element.position}>
                <div className="title-work-segment">
                    <p className="work-position">{element.position}</p>
                    <button onClick={()=>removeWorkSegment(element.position)} className="remove-work-segment"></button>
                </div>
                
                <div className="company-date">
                    <p style={{color: `${accentColor}`}} className="work-company">{element.company}</p>
                    <p className="work-date">{element.startDate}-{element.endDate}</p>
                </div>   
                <p className="work-description">{element.description}</p>
            </div>
           ) 
        })
    )
}
export default function WorkResume({work, noJob, workCollection, accentColor, removeWorkSegment}){
    return (
        <>
            <div className="work-box">
                <p style={{backgroundColor: `${accentColor}`}} className="work-info">Work Experience</p>
                <div className="work-collection">
                    <WorkStaticSegment
                        workCollection={workCollection}
                        removeWorkSegment={removeWorkSegment}
                        accentColor={accentColor}/>
                    {noJob && <WorkActiveSegment 
                        work={work}
                        accentColor={accentColor}/>}
                </div>
            </div>
        </>
    )
}