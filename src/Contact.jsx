import "./styles.css"
import { useState } from "react"

export default function Contact({props, inputChange, visibilityChange}){
    const [show, setHide] = useState(true);
    return (
        <>  
        <div className="form-segment">
            <div className="form-label">
                    <div className="form-title">
                        <p className="form-icon-contact"></p>
                        <h1>Personal information</h1>
                    </div>
                    <button className={show ? "hide" : "show"} onClick={() =>show ? setHide(false) : setHide(true)}></button>
                </div>   
                {show ? (
                    <form style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                        
                            <div className="form-section">
                                <label htmlFor="name">Full name</label>
                                <div className="input-entity">
                                    <input onChange={inputChange} maxLength={30} type="text" name="name" id="name" autoComplete ="cc-name" placeholder="Richard Sanchez" />
                                    <button onClick={visibilityChange} className={props.name.nameVisibility ? "open-eye-icon" : "closed-eye-icon"}type="button" id="name" ></button>
                                </div> 
                        </div>
                        
                        <div className="form-section">
                            <label htmlFor="position">Current position</label>
                            <div className="input-entity">
                                <input onChange={inputChange} maxLength={40} type="text" name="position" id="position" placeholder="Marketing Manager" />
                                <button id="position" onClick={visibilityChange} className={props.position.positionVisibility ? "open-eye-icon" : "closed-eye-icon"} type="button"></button>
                            </div>
                            
                        </div>
                        <div className="form-section">
                            <label htmlFor="phone">Phone number</label>
                            <div className="input-entity">
                                <input onChange={inputChange}  type="text" name="phone" id="phone" autoComplete ="tel" placeholder="+123-456-7890" />
                                <button id="phone" onClick={visibilityChange} className={props.phone.phoneVisibility ? "open-eye-icon" : "closed-eye-icon"} type="button"></button>
                            </div>
                        </div>
                        <div className="form-section">
                            <label htmlFor="email">Email</label>
                            <div className="input-entity">
                                <input onChange={inputChange}  type="email" name="email" id="email" autoComplete="email" placeholder="hello@reallygreatsite.com" />
                                <button id="email" onClick={visibilityChange} className={props.email.emailVisibility ? "open-eye-icon" : "closed-eye-icon"} type="button"></button>
                            </div>
                        </div>
                        <div className="form-section">
                            <label htmlFor="github">Github</label>
                            <div className="input-entity">
                                <input onChange={inputChange} type="github" name="github" id="github" autoComplete="url" placeholder="github.com/YourRepo" />
                                <button id="github" onClick={visibilityChange} className={props.github.githubVisibility ? "open-eye-icon" : "closed-eye-icon"} type="button"></button>
                            </div>
                        </div>
                        <div className="form-section">
                            <label htmlFor="linkedin">Linkedin</label>
                            <div className="input-entity">
                                <input onChange={inputChange} type="linkedin" name="linkedin" id="linkedin" autoComplete="url" placeholder="linkedin.com/in/your-profile/" />
                                <button id="linkedin" onClick={visibilityChange} className={props.linkedin.linkedinVisibility ? "open-eye-icon" : "closed-eye-icon"} type="button"></button>
                            </div>
                        </div>
                            
                        <div className="form-section">
                            <label htmlFor="website">Personal site / Portfolio</label>
                            <div className="input-entity">
                                <input onChange={inputChange} type="website" name="website" id="website" autoComplete="url" placeholder="www.reallygreatsite.com" />
                                <button id="website" onClick={visibilityChange} className={props.portfolio.portfolioVisibility? "open-eye-icon" : "closed-eye-icon"} type="button"></button>
                            </div>
                        </div>
                </form>
                ) :null}
               
        </div>
        </>
    )
}

