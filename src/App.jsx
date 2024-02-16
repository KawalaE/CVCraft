import Education from "./education"
import Contact from "./contact"
import Skills from "./skills"
import Languages from "./languages"
import Work from "./work"
import Resume from "./resume"
import UploadPicture from './photo'
import { usePDF } from "react-to-pdf"

export default function App(){
    const { toPDF, targetRef } = usePDF({filename: "resume.pdf"});

    return (
        <div className="app">
            <div className="left-side">
                <UploadPicture/>
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
