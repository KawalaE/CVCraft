import Education from "./Education"
import Contact from "./Contact"
import Skills from "./Skills"
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
            setGithub(e.target.value);
        }else if(e.target.id === "linkedin"){
            setLinkedin(e.target.value);
        }else if(e.target.id === "website"){
            setPortfolio(e.target.value);
        }else if(e.target.id === "uniTitle"){
            setUniTitle(e.target.value);
        }else if(e.target.id === "uniName"){
            setUniName(e.target.value);
        }else if(e.target.id === "startUniDate"){
            setStartUniDate(e.target.value);
        }else if(e.target.id === "endUniDate"){
            setEndUniDate(e.target.value);
        }else if(e.target.id === "skill"){
            console.log("here")
            setSkillName(e.target.value);
        }else if(e.target.id === "skill-description"){
            setSkillDescription(e.target.value);
        }
    } 

    function  visibilityHandler(e){
        if(e.target.id === "name"){
            setNameVisibility(nameVisibility ? false : true);
        }else if(e.target.id === "position"){
            setPositionVisibility(positionVisibility ? false : true);
        }else if(e.target.id === "phone"){
            setPhoneVisibility(phoneVisibility ? false : true);
        }else if(e.target.id === "email"){
            setEmailVisibility(emailVisibility ? false : true);
        }else if(e.target.id === "github"){
            setGithubVisibility(githubVisibility ? false : true);
        }else if(e.target.id === "linkedin"){
            console.log("here1")
            setLinkedinVisibility(linkedinVisibility ? false : true);
        }else if(e.target.id === "website"){
            console.log("here2")
            setPortfolioVisibility(portfolioVisibility ? false : true);
        } 
    }

    const [fullName, setFullName] = useState("Richard Sanchez");
    const [nameVisibility, setNameVisibility] = useState(true);
    const [position, setPosition] = useState("Marketing Manager");
    const [positionVisibility, setPositionVisibility] = useState(true);
    const [phoneNumber, setphoneNumber] = useState("+123-456-7890");
    const [phoneVisibility, setPhoneVisibility] = useState(true);
    const [email, setEmail] = useState("hello@reallygreatsite.com");
    const [emailVisibility, setEmailVisibility] = useState(true);
    const [github, setGithub] = useState("github.com/YourRepo");
    const [githubVisibility, setGithubVisibility] = useState(true);
    const [linkedin, setLinkedin] = useState("linkedin.com/in/your-profile/");
    const [linkedinVisibility, setLinkedinVisibility] = useState(true);
    const [portfolio, setPortfolio] = useState("reallygreatsite.com");
    const [portfolioVisibility, setPortfolioVisibility] = useState(true);
    const props = {
        name: {fullName, nameVisibility}, 
        position:{position, positionVisibility}, 
        phone:{phoneNumber, phoneVisibility}, 
        email:{email, emailVisibility }, 
        github:{github, githubVisibility}, 
        linkedin:{linkedin,linkedinVisibility}, 
        portfolio:{portfolio, portfolioVisibility}};

    const [uniTitle, setUniTitle] = useState("Master's Degree in Math");
    const [uniName, setUniName] = useState("Wardiere university");
    const [startUniDate, setStartUniDate] = useState("12-12-2024");
    const [endUniDate, setEndUniDate] = useState("12-12-2024");
    const [stillStudying, setStillStudying] = useState(false);
    const [staticEduCollection, setStaticEduCollection] = useState([]);
    const [emptyEducation, setEmptyEducation] = useState(false);
    const [skillName, setSkillName] = useState("");
    const [skillDescription, setSkillDescription] = useState("");
    const [skillsCollection, setSkillsCollection] = useState([]);
    const [noSkills, setNoSkills] = useState(false);

    const education = {
        uniTitle: {uniTitle, uniName, startUniDate, endUniDate: stillStudying ? "now" : endUniDate}
    };
    const skills = {
        skillName: skillName,
        skillDescription: skillDescription
    }

    function checkboxHandler(){
        setStillStudying(stillStudying ? false : true);
    }
    function onSubmit(){
        setStaticEduCollection([...staticEduCollection, {
            uniTitle : uniTitle,
            uniName : uniName,
            startUniDate : startUniDate,
            endUniDate : stillStudying ? "now" : endUniDate,
        }]);
        displayEducation();
        setUniTitle("Your title");
        setUniName("University name");
        setStartUniDate("12-12-2024");
        setEndUniDate("12-12-2024");
        setStillStudying(false);
    }
    function displayEducation(){
        setEmptyEducation(emptyEducation ? false : true);
        setUniTitle("Your title");
        setUniName("University name");
        setStartUniDate("12-12-2024");
        setEndUniDate("12-12-2024");
        setStillStudying(false);
    }
    function displaySkills(){
        setNoSkills(noSkills ? false : true);
        setSkillName("New Skill");
        setSkillDescription("Optional description...")
    }
    function removeEduSegment(segmentName){
        setStaticEduCollection(staticEduCollection.filter((element) => element.uniTitle !== segmentName));
    }
    function removeSkillSegment(segmentName){
        setSkillsCollection(skillsCollection.filter((element) => element.skillName !== segmentName));
    }
    function addSkill(name, description){
        setSkillsCollection([...skillsCollection, {
            skillName : name,
            skillDescription : description,
        }]);
        displaySkills();
        console.log(skillsCollection)
    }
    const { toPDF, targetRef } = usePDF({filename: "resume.pdf"});
    return (
        <div className="app">
            <div className="left-side">
                <Contact props={props} inputChange={handleChange} visibilityChange={visibilityHandler}/>
                <Education 
                    education={education} 
                    inputChange={handleChange} 
                    checkboxHandler={checkboxHandler}
                    onSubmit={onSubmit}
                    displayEducation={displayEducation}
                     />
                <Skills 
                    addSkill={addSkill}
                    inputChange={handleChange}
                    displaySkills={displaySkills}/>
                <Work/>
            </div>
            <div ref={targetRef} className="right-side">
                <Resume 
                    props={props} 
                    education={education} 
                    skills={skills}
                    skillsCollection={skillsCollection}
                    educationCollection={staticEduCollection} 
                    emptyEducation={emptyEducation} 
                    removeEduSegment={removeEduSegment}
                    noSkills={noSkills}
                    removeSkills={removeSkillSegment}/>
            </div>
            {/*<button onClick={() => toPDF()}>Download PDF</button>*/}
            
        </div>
        
    )
}
