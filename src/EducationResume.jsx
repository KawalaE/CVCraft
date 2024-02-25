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
export default function EducationResume({education}){
    return (
        <>
        <div className="education-box">
            <p className="education-info">Education</p>
            <div className="education-inside">
                <EducationActiveSegment education={education}></EducationActiveSegment>
            </div>
        </div>
        </>
    )
}