import "./styles.css"
import { useState } from "react"


export default function Education({inputChange, checkboxHandler}){
    const [show, setHide] = useState(true);
    const [wrongTitle, setWrongTitle] = useState("");
    const [wrongUni, setWrongUni] = useState("");
    const [wrongStartDate, setWrongStartDate] = useState("");
    const [wrongEndDate, setWrongEndDate] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const uniTitleInput = e.target[0].value;
        const uniInput = e.target[1].value;
        const startDateInput = e.target[2].value;
        const endDateInput = e.target[3].value;
        const checkboxInput = e.target[4].checked;

        if(/\d/.test(uniTitleInput)){
            setWrongTitle("There should not be any numbers.");
        } else if(uniTitleInput.trim()=== "") setWrongTitle("This field field is empty.")
        else(setWrongTitle(""));

        if(/\d/.test(uniInput)){
            setWrongUni("There should not be any numbers.");
        } else if(uniInput.trim()=== "") setWrongUni("This field field is empty.");
        else (setWrongUni(""));

        if(startDateInput === "") setWrongStartDate("Choose start date");
        else(setWrongStartDate(""));

        if(endDateInput === "" && checkboxInput === false){
            setWrongEndDate("Set the date or check below box.");
        } else(setWrongEndDate(""));
    }

    return (
        <>
            <div className="form-segment">
                <div className="form-label">
                    <div className="form-title">
                            <p className="form-icon-education"></p>
                            <h1>Education</h1>
                    </div>
                    <button className={show ? "hide" : "show"}  onClick={() =>show ? setHide(false) : setHide(true)}></button>
                </div>
                {show ? (
                    <form onSubmit={handleSubmit} style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                    <div className="form-section">
                        <label htmlFor="uniTitle">Degree</label>
                        <input onChange={inputChange} type="name" name="name" id="uniTitle" placeholder="Master's Degree in Math"/>
                        <p className="form-error">{wrongTitle}</p>
                    </div>
                    <div className="form-section">
                        <label htmlFor="uniName">Name of the Institution</label>
                        <input onChange={inputChange} type="name" name="name" id="uniName" placeholder="Wardiere university"/>
                        <p className="form-error">{wrongUni}</p>
                    </div>
                    <div className="form-section">
                        <label htmlFor="startDate">Start date</label>
                        <input onChange={inputChange} type="date" name="date" id="startUniDate"/>
                        <p className="form-error">{wrongStartDate}</p>
                    </div>
                    <div className="form-section">
                        <label htmlFor="endDate">End date</label>
                        <input onChange={inputChange} type="date" name="date" id="endUniDate"/>
                        <p className="form-error">{wrongEndDate}</p>
                    </div>
                    <div className="form-section">
                        <div className="checkbox">
                            <label htmlFor="study-check">Still studying</label>
                            <input onChange={checkboxHandler} type="checkbox" id="study-check"></input>
                        </div>
                    </div>
                    <button type="submit" className="add-btn">Save</button>
                </form>
                ) : null}
           </div>
        </>
    )
}