import "./styles.css"
import { useState } from "react"

export default function Languages(){
    const [show, setHide] = useState(false);
    return (
        <>  
            <div className="form-segment">
                <div className="form-label">
                    <div className="form-title">
                        <p className="form-icon-speech"></p>
                        <h1>Languages</h1>
                    </div>
                    <button className={show ? "hide" : "show"} onClick={() =>show ? setHide(false) : setHide(true)}></button>
                    </div>
                    {show ? (
                        <form style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                        <div className="form-section">
                            <label htmlFor="language">Language</label>
                            <input type="text" name="language" id="language" placeholder="English" />
                        </div>
                        <div className="form-section">
                        <label htmlFor="level">Level</label>
                            <select>
                                <option value="a1">A1 (Beginner)</option>
                                <option value="a2">A2 (Elementary) </option>
                                <option value="b1">B1 (Intermediate)</option>
                                <option value="b2">B2 (Upper Intermediate)</option>
                                <option value="c1">C1 (Advanced)</option>
                                <option value="c2">C2 (Proficient)</option>
                            </select>
                        </div>
                        <button className="add-btn">Add</button>
                    </form>
                    ) :null}
            </div>
        </>
    )
}