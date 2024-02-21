import "./styles.css"
import { useState } from "react"

export default function Skills(){
    const [show, setHide] = useState(true);
    return (
        <>  
            <div className="form-segment">
                <div className="form-label">
                        <h1>Skills</h1>
                        <button className={show ? "hide" : "show"} onClick={() =>show ? setHide(false) : setHide(true)}></button>
                    </div>
                    {show ? (
                        <form className="contactForm">
                        <div className="form-section">
                            <label htmlFor="skill">Add a skill</label>
                            <input type="text" name="skill" id="skill" placeholder="JavaScript" />
                        </div>
                        
                    </form>
                    ) :null}
            </div>
           
        </>
    )
}