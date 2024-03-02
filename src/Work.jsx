import { useState } from "react";

export default function Work({inputChange, addWorkExperiance, displayWork}){
    const [show, setHide] = useState(true);
    const [addNewWork, setAddNewWork] = useState(false);
    const [wrongStartDate, setWrongStartDate] = useState("");
    const [wrongEndDate, setWrongEndDate] = useState("");
    const [wrongCompanyName, setWrongCompanyName] = useState("");
    const [wrongPosition, setWrongPosition] = useState("");

   
    function handleSubmit(e){
        e.preventDefault();
        const position = e.target[0].value;
        const companyName = e.target[1].value;
        const startDate = e.target[2].value;
        const endDate = e.target[3].value;
        const checkbox = e.target[4].checked;

        let correctFiledCount = 0;

        if(startDate === ""){
            setWrongStartDate("Choose start date");
        }else {
            setWrongStartDate("");
            correctFiledCount++;
        }

        if(endDate === "" && checkbox === false){
            setWrongEndDate("Set the date or check below box.");
        }else{
            setWrongEndDate("");
            correctFiledCount++;
        }

        if(/\d/.test(companyName)){
            setWrongCompanyName("There should not be any numbers.");
        } else if (companyName.trim() === ""){
            setWrongCompanyName("This field is empty.")
        } else {
            setWrongCompanyName("");
            correctFiledCount++;
        }

        if(/\d/.test(position)){
            setWrongPosition("There should not be any numbers.");
        } else if (position.trim() === ""){
            setWrongPosition("This field is empty.")
        } else {
            setWrongPosition("");
            correctFiledCount++;
        }

        if(correctFiledCount === 4){
            addWorkExperiance(
                e.target[0].value,
                e.target[1].value,
                e.target[2].value,
                e.target[3].value,
                e.target[5].value,

            )
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].checked = false;
            e.target[3].value = "";
            e.target[4].value = "";
            e.target[5].value = "";
            setAddNewWork(false);
        }
    }
    function addWork(){
        setAddNewWork(addNewWork ? false : true);
        displayWork();
    }
    
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
                    <>
                        <button onClick={addWork} className="add-edu-btn" >{addNewWork ? "Close" : "Add new"}</button>
                        {addNewWork && (
                            <form onSubmit={handleSubmit} style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                                <div className="form-section-work">
                                    <label htmlFor="work-position">Position</label>
                                    <input onChange={inputChange} maxLength={50} type="name" name="name" id="work-position" placeholder="Shift Manager"/>
                                    <p className="form-error">{wrongPosition}</p>
                                </div>
                                <div className="form-section-work">
                                    <label htmlFor="company-name">Name of the Company</label>
                                    <input onChange={inputChange} type="name" maxLength={50} name="name" id="company-name" placeholder="Burger King"/>
                                    <p className="form-error">{wrongCompanyName}</p>
                                </div>
                                <div className="form-section-work">
                                    <label htmlFor="startDate">Start date</label>
                                    <input onChange={inputChange} type="month" name="date" id="startDate"/>
                                    <p className="form-error">{wrongStartDate}</p>
                                </div>
                                <div className="form-section-work">
                                    <label htmlFor="endDate">End date</label>
                                    <input onChange={inputChange} type="month" name="date" id="endDate"/>
                                    <p className="form-error">{wrongEndDate}</p>
                                </div>
                                <div className="form-section-work">
                                    <div className="checkbox">
                                        <label htmlFor="still-working">Still working</label>
                                        <input onChange={inputChange} type="checkbox" id="work-check"/>
                                    </div>
                                </div>
                                <div className="form-section-work">
                                    <label htmlFor="position-description">Describe your position</label>
                                    <textarea onChange={inputChange} name="position-description" maxLength={200} id="position-description" cols="10" rows="5"  maxLength="300" placeholder="Information about your responsibilities ...">
                                    </textarea>
                                </div>
                                <button type="submit" className="add-btn">Add</button>
                            </form>
                        )}
                    </>
                    
                ) : null}
            </div>
        </>
    )
}