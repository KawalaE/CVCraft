import "./styles.css"
import { useState } from "react"
//A1, A2, B1, B2, C1, C2
export default function Languages(){
    const [show, setHide] = useState(true);
    return (
        <>  <h1>Languages</h1>
            <button onClick={() =>show ? setHide(false) : setHide(true)}>{show ? "Hide": "Show"}</button>
            {show ? (
                <form className="contactForm">
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
            </form>
            ) :null}
            
        </>
    )
}