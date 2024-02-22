import Education from "./Education"
import Contact from "./Contact"
import Skills from "./Skills"
import Languages from "./Languages"
import Work from "./Work"
import Resume from "./Resume"
import { usePDF } from "react-to-pdf"
import { useState } from "react"

export default function App(){

    function handleChange(e){
        if(e.target.id === "name"){
            setFullName(e.target.value);
        } else if(e.target.id === "position"){
            setPosition(e.target.value);
        }
        
    } 

    const [fullName, setFullName] = useState("");
    const [position, setPosition] = useState("");
    const props = {fullName, position};

    const { toPDF, targetRef } = usePDF({filename: "resume.pdf"});
    return (
        <div className="app">
            <div className="left-side">
                <Contact inputChange={handleChange}/>
                <Education/>
                <Skills/>
                <Languages/>
                <Work/>
            </div>
            <div ref={targetRef} className="right-side">
                <Resume props={props}/>
            </div>
            {/*<button onClick={() => toPDF()}>Download PDF</button>*/}
            
        </div>
        
    )
}
