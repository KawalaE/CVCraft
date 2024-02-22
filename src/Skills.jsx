import "./styles.css"
import { useState } from "react"

export default function Skills(){
    const [show, setHide] = useState(false);
    return (
        <>  
            <div className="form-segment">
                <div className="form-label">
                    <div className="form-title">
                        <p className="form-icon-skills"></p>
                        <h1>Skills</h1>
                    </div>
                        <button className={show ? "hide" : "show"} onClick={() =>show ? setHide(false) : setHide(true)}></button>
                    </div>
                    {show ? (
                        <form style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                        <div className="form-section">
                            <label htmlFor="skill">Add a skill</label>
                            <input type="text" name="skill" id="skill" placeholder="JavaScript" />
                        </div>
                        <button className="add-btn">Add</button>
                    </form>
                    ) :null}
            </div>
           
        </>
    )
}