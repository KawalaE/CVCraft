import { useState } from "react";


function WorkActiveSegment({work}){ 
    return (
        <div className="work-segment" >
            <p className="work-position">{work.positionName}</p>
            <div className="company-date">
                <p className="work-company">{work.companyName}</p>
                <p className="work-date">{work.startWorkDate}-{work.endWorkDate}</p>
            </div>
            
            <p className="work-description">{work.jobDescription}</p>
        </div>
    )
}
export default function WorkResume({work, noJob}){
    return (
        <>
            <div className="work-box">
                <p className="work-info">Work Experience</p>
                <div className="work-collection">
                    {noJob && <WorkActiveSegment work={work}/>}
                </div>
            </div>
        </>
    )
}