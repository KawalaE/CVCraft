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
function EducationStaticSegment({eduArr}){
    return (
        <>  
            {eduArr.length > 0 &&
            eduArr.map((element) => {
                return (
                    <>
                    <div className="edu-segment">
                        <p className="degree-name">{element.uniTitle}</p>
                        <p>{element.uniName}</p>
                        <p className="edu-date">{element.startDate} - {element.endDate}</p>
                    </div>
                    </>
                )
            })
            }
        </>
    )
}
export default function EducationResume({education, staticEducation}){
    return (
        <>
        <div className="education-box">
            <p className="education-info">Education</p>
            <div className="education-inside">
                <EducationStaticSegment eduArr={staticEducation}></EducationStaticSegment>
                <EducationActiveSegment education={education}></EducationActiveSegment>
            </div>
        </div>
        </>
    )
}