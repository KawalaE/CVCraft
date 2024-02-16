import "./styles.css"
import { useState } from "react"

export default function Contact(){
    const [show, setHide] = useState(true);
    return (
        <>  <h1>Personal information</h1>
            <button onClick={() =>show ? setHide(false) : setHide(true)}>{show ? "Hide": "Show"}</button>
            {show ? (
                <form className="contactForm">
                <div className="form-section">
                    <label htmlFor="name">Full name</label>
                    <input type="text" name="name" id="name" autoComplete ="cc-name" placeholder="Richard Sanchez" />
                </div>
                <div className="form-section">
                    <label htmlFor="position">Current position</label>
                    <input type="text" name="position" id="position" placeholder="Marketing Manager" />
                </div>
                <div className="form-section">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name="phone" id="phone" autoComplete ="tel" placeholder="+123-456-7890" />
                </div>
                <div className="form-section">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" autoComplete="email" placeholder="hello@reallygreatsite.com" />
                </div>
                <div className="form-section">
                    <label htmlFor="website">Personal site</label>
                    <input type="website" name="website" id="website" autoComplete="url" placeholder="www.reallygreatsite.com" />
                </div>
            </form>
            ) :null}         
        </>
    )
}