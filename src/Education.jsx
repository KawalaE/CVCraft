import "./styles.css"
import { useState } from "react"

function StaticEducationInstance({array}){
    return(
        <>
            {array.length > 0 && array.map((instance) => {
                return (
                    <>
                    <div className="static-edu-shortcut">
                        <p key={instance.id}>{instance.universityName}</p>
                        <button class="open-eye-icon"></button>
                    </div>
                        
                    </>
                )
            })}
        </>
    )
}

export default function Education({education, inputChange, checkboxHandler, staticEdu={staticEdu}, addEducation={addEducation}}){
    const [show, setHide] = useState(true);
    return (
        <>
            <div className="form-segment">
                <div className="form-label">
                    <div className="form-title">
                            <p className="form-icon-education"></p>
                            <h1>Education</h1>
                    </div>
                    <button className={show ? "hide" : "show"}  onClick={() =>show ? setHide(false) : setHide(true)}></button>
                </div>
                <div className="edu-instance">
                    <StaticEducationInstance array={staticEdu}></StaticEducationInstance>
                </div>
                {show ? (
                    <form style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                    <div className="form-section">
                        <label htmlFor="uniTitle">Degree</label>
                        <input onChange={inputChange} type="name" name="name" id="uniTitle" placeholder="Master's Degree in Math"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="uniName">Name of the Institution</label>
                        <input onChange={inputChange} type="name" name="name" id="uniName" placeholder="Wardiere university"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="startDate">Start date</label>
                        <input onChange={inputChange} type="date" name="date" id="startUniDate"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="endDate">End date</label>
                        <input onChange={inputChange} type="date" name="date" id="endUniDate"/>
                    </div>
                    <div className="form-section">
                        <div className="checkbox">
                            <label htmlFor="study-check">Still studying</label>
                            <input onChange={checkboxHandler} type="checkbox" id="study-check"></input>
                        </div>
                    </div>
                    <button onClick={addEducation} className="add-btn" type="button">Add</button>
                </form>
                ) : null}
           </div>
        </>
    )
}