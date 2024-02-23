export default function EducationResume({education}){
    return (
        <>
        <div className="education-box">
            <p className="education-info">Education</p>
            <div className="education-inside">
                <div className="edu-segment">
                    <p>{education.education.uniTitle}</p>
                    <p>{education.education.uniName}</p>
                    <p>{education.education.startUniDate}</p>
                    <p>{education.education.endUniDate}</p>

                </div>
            </div>
        </div>
        
        </>
    )
}