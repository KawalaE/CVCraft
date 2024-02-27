import "./styles.css"
import { useState } from "react"

export default function Skills({addSkill, inputChange}){
    const [show, setHide] = useState(true);
    const [error, setError] = useState("");

    function skillSubmit(e){
        e.preventDefault();
        const skillField =  e.target[0].value;

        if(skillField.trim() === ""){
            setError("This field cannot be empty.")
        }else {
            setError("");
            addSkill(e.target[0].value, e.target[1].value);
        }
    }
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
                        <form onSubmit={skillSubmit} style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                            <div className="form-section-skill">
                                <label htmlFor="skill">Add a skill</label>
                                <input onChange={inputChange}  type="text" name="skill" id="skill" placeholder="JavaScript" />
                                <p className="form-error">{error}</p>
                            </div>
                            <div className="form-section-skill">
                                <label htmlFor="skill-description">Elaborate</label>
                                <textarea onChange={inputChange} type="text" name="skill-description" id="skill-description" placeholder="DOM manipulation, extensive experiance working with API's." />
                            </div>
                            <button className="add-btn" type="submit" >Add</button>
                        </form>
                    ) :null}
            </div>
           
        </>
    )
}