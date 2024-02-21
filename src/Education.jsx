import "./styles.css"
import { useState } from "react"

export default function Education(){
    const [show, setHide] = useState(false);
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
                {show ? (
                    <form style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                    <div className="form-section">
                        <label htmlFor="startDate">Start date</label>
                        <input type="date" name="date" id="startDate"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="endDate">End date</label>
                        <input type="date" name="date" id="endDate"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="uniName">Name of the Institution</label>
                        <input type="name" name="name" id="uniName" placeholder="Wardiere university"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="uniTitle">Degree</label>
                        <input type="name" name="name" id="uniTitle" placeholder="Master's Degree in Math"/>
                    </div>
                </form>
                ) : null}
           </div>
        </>
    )
}