import { useState } from "react";
export default function Work(){
    const [show, setHide] = useState(false);
    return (
        <>
        <div className="form-segment">
            <div className="form-label">
                <div className="form-title">
                    <p className="form-icon-briefcase"></p>
                    <h1>Work experience</h1>
                </div>
                <button className={show ? "hide" : "show"} onClick={() =>show ? setHide(false) : setHide(true)}></button>
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
                        <label htmlFor="company-name">Name of the Company</label>
                        <input type="name" name="name" id="company-name" placeholder="Burger King"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="work-position">Position</label>
                        <input type="name" name="name" id="work-position" placeholder="Shift Manager"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="position-description">Describe your position</label>
                        <textarea name="position-description" id="" cols="10" rows="5"  maxLength="300" placeholder="Information about your responsibilities ...">
                        </textarea>
                    </div>
                    <button className="add-btn">Add</button>
                </form>
                ) : null}
            </div>
        </>
    )
}