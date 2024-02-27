import "./styles.css"
import { useState } from "react"


export default function Education({inputChange, checkboxHandler, onSubmit, displayEducation}){
    const [show, setHide] = useState(false);
    const [wrongTitle, setWrongTitle] = useState("");
    const [wrongUni, setWrongUni] = useState("");
    const [wrongStartDate, setWrongStartDate] = useState("");
    const [wrongEndDate, setWrongEndDate] = useState("");
    const [addNew, setAddNew] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        let uniTitleInput = e.target[0].value;
        const uniInput = e.target[1].value;
        const startDateInput = e.target[2].value;
        const endDateInput = e.target[3].value;
        const checkboxInput = e.target[4].checked;

        let correctFieldCount = 0;

        if(/\d/.test(uniTitleInput)){
            setWrongTitle("There should not be any numbers.");
        } else if(uniTitleInput.trim()=== "") setWrongTitle("This field field is empty.")
        else{
            setWrongTitle("");
            correctFieldCount++;
        }

        if(/\d/.test(uniInput)){
            setWrongUni("There should not be any numbers.");
        } else if(uniInput.trim()=== "") setWrongUni("This field field is empty.");
        else{
            setWrongUni("");
            correctFieldCount++;
        }

        if(startDateInput === "") setWrongStartDate("Choose start date");
        else{
            setWrongStartDate("")
            correctFieldCount++;
        }

        if(endDateInput === "" && checkboxInput === false){
            setWrongEndDate("Set the date or check below box.");
        } else{
            setWrongEndDate("");
            correctFieldCount++;
        }
         
        if(correctFieldCount===4){
            console.log("here")
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
            e.target[3].value = "";
            e.target[4].checked = false;
            onSubmit(); 
            setAddNew(false);
        }
    }
    function addEducation(){
        setAddNew(addNew ? false: true);
        displayEducation();
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
                    <>
                    <button onClick={addEducation} className="add-edu-btn" >{addNew ? "Close" : "Add new"}</button>
                    {addNew && (
                        <form onSubmit={handleSubmit} style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                            <div className="form-section-edu">
                                <label htmlFor="uniTitle">Degree</label>
                                <input onChange={inputChange} type="name" name="name" id="uniTitle" placeholder="Master's Degree in Math"/>
                                <p className="form-error">{wrongTitle}</p>
                            </div>
                            <div className="form-section-edu">
                                <label htmlFor="uniName">Name of the Institution</label>
                                <input onChange={inputChange} type="name" name="name" id="uniName" placeholder="Wardiere university"/>
                                <p className="form-error">{wrongUni}</p>
                            </div>
                            <div className="form-section-edu">
                                <label htmlFor="startDate">Start date</label>
                                <input onChange={inputChange} type="date" name="date" id="startUniDate"/>
                                <p className="form-error">{wrongStartDate}</p>
                            </div>
                            <div className="form-section-edu">
                                <label htmlFor="endDate">End date</label>
                                <input onChange={inputChange} type="date" name="date" id="endUniDate"/>
                                <p className="form-error">{wrongEndDate}</p>
                            </div>
                            <div className="form-section-edu">
                                <div className="checkbox">
                                    <label htmlFor="study-check">Still studying</label>
                                    <input onChange={checkboxHandler} type="checkbox" id="study-check"></input>
                                    
                                </div>
                            </div>
                            <button className="add-btn" type="submit">Save</button>
                        </form>
                    )

                    }
                        
                    </>
                    
                ) : null}
           </div>
        </>
    )
}