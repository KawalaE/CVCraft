import "./styles.css"
import { useState } from "react"

export default function Skills(){
    const [show, setHide] = useState(true);
    return (
        <>  <h1>Skills</h1>
            <button onClick={() =>show ? setHide(false) : setHide(true)}>{show ? "Hide": "Show"}</button>
            {show ? (
                <form className="contactForm">
                <div className="form-section">
                    <label htmlFor="skill">Add a skill</label>
                    <input type="text" name="skill" id="skill" placeholder="JavaScript" />
                </div>
                
            </form>
            ) :null}
            
        </>
    )
}