import "./styles.css"
import { useState } from "react"

export default function Skills({addSkill, inputChange, displaySkills}){
    const [show, setHide] = useState(true);
    const [error, setError] = useState("");
    const [addNewSkill, setAddNewSkill] = useState(false);

    function skillSubmit(e){
        e.preventDefault();
        const skillField =  e.target[0].value;
        if(skillField.trim() === ""){
            setError("This field cannot be empty.")
        }else {
            addSkill(e.target[0].value, e.target[1].value);
            setError("");
            e.target[0].value = "";
            e.target[1].value = "";
            setAddNewSkill(false);
        }
    }
    function addSkills(){
        setAddNewSkill(addNewSkill ? false : true);
        displaySkills();
        
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
                        <>
                        <button onClick={addSkills} className="add-edu-btn" >{addNewSkill ? "Close" : "Add new"}</button>
                        {addNewSkill && (
                             <form onSubmit={skillSubmit} style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                             <div className="form-section-skill">
                                 <label htmlFor="skill">Add a skill</label>
                                 <input onChange={inputChange}  maxLength={30} type="text" name="skill" id="skill" placeholder="JavaScript" />
                                 <p className="form-error">{error}</p>
                             </div>
                             <div className="form-section-skill">
                                 <label htmlFor="skill-description">Elaborate</label>
                                 <textarea onChange={inputChange} type="text" maxLength={100} name="skill-description" id="skill-description" placeholder="DOM manipulation, extensive experiance working with API's." />
                             </div>
                             <button className="add-btn" type="submit" >Add</button>
                         </form>
                        )}
                        </>
                       
                    ) :null}
            </div>
           
        </>
    )
}