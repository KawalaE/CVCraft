import Education from "./Education"
import Contact from "./Contact"
import Skills from "./Skills"
import Languages from "./Languages"
import Work from "./Work"
import Resume from "./Resume"
import { usePDF } from "react-to-pdf"

export default function App(){
    const { toPDF, targetRef } = usePDF({filename: "resume.pdf"});
    return (
        <div className="app">
            <div className="left-side">
                <Contact/>
                <Education/>
                <Skills/>
                <Languages/>
                <Work/>
            </div>
            <div ref={targetRef} className="right-side">
                <Resume/>
            </div>
            {/*<button onClick={() => toPDF()}>Download PDF</button>*/}
            
        </div>
        
    )
}
