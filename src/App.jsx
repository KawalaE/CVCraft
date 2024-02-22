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
        } else if(e.target.id === "phone"){
            setphoneNumber(e.target.value);
        } else if(e.target.id === "email"){
            setEmail(e.target.value);
        }else if(e.target.id === "github"){
            setGithubWeb(e.target.value);
        }else if(e.target.id === "linkedin"){
            setLinkedinWeb(e.target.value);
        }else if(e.target.id === "website"){
            setPortfolio(e.target.value);
        } 
    } 

    const [fullName, setFullName] = useState("Richard Sanchez");
    const [position, setPosition] = useState("Marketing Manager");
    const [phoneNumber, setphoneNumber] = useState("+123-456-7890");
    const [email, setEmail] = useState("hello@reallygreatsite.com");
    const [githubWeb, setGithubWeb] = useState("hello@reallygreatsite.com");
    const [linkedinWeb, setLinkedinWeb] = useState("hello@reallygreatsite.com");
    const [portfolio, setPortfolio] = useState("hello@reallygreatsite.com");
    const props = {fullName, position, phoneNumber, email, githubWeb, linkedinWeb, portfolio};

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
