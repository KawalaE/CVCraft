import Education from "./Education"
import Contact from "./Contact"
import Skills from "./Skills"
import Work from "./Work"
import Resume from "./Resume"
import Customize from "./Customize"
import "./styles.css"
import { useState } from "react"
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { parseISO, format, set } from "date-fns"

export default function App(){
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
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
        }else if(e.target.id === "location"){
            setLocation(e.target.value);
        }
        else if(e.target.id === "uniTitle"){
            setUniTitle(e.target.value);
        }else if(e.target.id === "uniName"){
            setUniName(e.target.value);
        }else if(e.target.id === "startUniDate"){
            let date = e.target.value;
            let formatedDate = format(parseISO(date), "MM/yyyy");
            setStartUniDate(formatedDate);
        }else if(e.target.id === "endUniDate"){
            let date = e.target.value;
            let formatedDate = format(parseISO(date), "MM/yyyy");
            setEndUniDate(formatedDate);
        }else if(e.target.id === "skill"){
            setSkillName(e.target.value);
        }else if(e.target.id === "skill-description"){
            setSkillDescription(e.target.value);
        }else if(e.target.id === "work-position"){
            setPositionName(e.target.value);
        }else if(e.target.id === "company-name"){
            setCompanyName(e.target.value);
        }else if(e.target.id === "startDate"){
            let date = e.target.value;
            let formatedDate = format(parseISO(date), "MM/yyyy");
            setStartWorkDate(formatedDate.toString());
        }else if(e.target.id === "endDate"){
            let date = e.target.value;
            let formatedDate = format(parseISO(date), "MM/yyyy");
            setEndWorkDate(formatedDate);
        }else if(e.target.id === "work-check"){
            setStillWorking(e.target.value);
        }else if(e.target.id === "position-description"){
            setJobDescription(e.target.value);
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
            setLinkedinVisibility(linkedinVisibility ? false : true);
        }else if(e.target.id === "website"){
            setPortfolioVisibility(portfolioVisibility ? false : true);
        } else if(e.target.id === "location"){
            setLocationVisibility(locationVisibility ? false : true);
        }
    }
    const [pictureVisibility, setPictureVisibility] = useState(true);
    const [fullName, setFullName] = useState("Richard Sanchez");
    const [nameVisibility, setNameVisibility] = useState(true);
    const [position, setPosition] = useState("Marketing Manager");
    const [positionVisibility, setPositionVisibility] = useState(true);
    const [phoneNumber, setphoneNumber] = useState("+123-456-7890");
    const [phoneVisibility, setPhoneVisibility] = useState(true);
    const [email, setEmail] = useState("hello@reallygreatsite.com");
    const [emailVisibility, setEmailVisibility] = useState(true);
    const [location, setLocation] = useState("Warsaw");
    const [locationVisibility, setLocationVisibility] = useState(true);
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
        location: {location, locationVisibility},
        github:{github, githubVisibility}, 
        linkedin:{linkedin,linkedinVisibility}, 
        portfolio:{portfolio, portfolioVisibility}};

    const [uniTitle, setUniTitle] = useState("Master's Degree in Math");
    const [uniName, setUniName] = useState("Wardiere university");
    const [startUniDate, setStartUniDate] = useState("Start date");
    const [endUniDate, setEndUniDate] = useState("End date");
    const [stillStudying, setStillStudying] = useState(false);
    const [staticEduCollection, setStaticEduCollection] = useState([]);
    const [emptyEducation, setEmptyEducation] = useState(false);

    const [skillName, setSkillName] = useState("");
    const [skillDescription, setSkillDescription] = useState("");
    const [skillsCollection, setSkillsCollection] = useState([]);
    const [noSkills, setNoSkills] = useState(false);
    
    const [positionName, setPositionName] = useState("Position name");
    const [companyName, setCompanyName] = useState("Company Name");
    const [startWorkDate, setStartWorkDate] = useState("Start date");
    const [endWorkDate, setEndWorkDate] = useState("End date");
    const [stillWorking, setStillWorking] = useState(false);
    const [jobDescription, setJobDescription] = useState("");
    const [noJob, setNoJob] = useState(false);
    const [accentColor, setAccentColor] = useState("#0d996a")
    const [workCollection, setWorkCollection] = useState([]);

    let prevTheme = localStorage.getItem("theme");
    const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark-theme" : "light-theme";
    const [currentTheme, setCurrentTheme] = useState(prevTheme !== null? prevTheme : sysTheme);
    
    const education = {
        uniTitle: {uniTitle, uniName, startUniDate, endUniDate: stillStudying ? "now" : endUniDate}
    };
    const skills = {
        skillName: skillName,
        skillDescription: skillDescription
    }
    const work = {
        positionName :positionName,
        companyName : companyName,
        startWorkDate : startWorkDate,
        endWorkDate : stillWorking ? "now" : endWorkDate,
        jobDescription : jobDescription
    }
    function colorHandler(e){
        setAccentColor(e.target.value);
    }
    function pictureHandler(){
        setPictureVisibility(pictureVisibility ? false : true);
    }
    function checkboxHandler(){
        setStillStudying(stillStudying ? false : true);
    }
    function checkboxWorkHandler(){
        setStillWorking(stillWorking ? false : true);
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
        setStartUniDate("Start date");
        setEndUniDate("End date");
        setStillStudying(false);
    }
    function displayEducation(){
        setEmptyEducation(emptyEducation ? false : true);
        setUniTitle("Your title");
        setUniName("University name");
        setStartUniDate("Start date");
        setEndUniDate("End date");
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
    function removeWorkSegment(segmentName){
        setWorkCollection(workCollection.filter((element) => element.position !== segmentName));
    }
    function addSkill(name, description){
        setSkillsCollection([...skillsCollection, {
            skillName : name,
            skillDescription : description,
        }]);
        displaySkills();
    }
    function displayWork(){
        setNoJob(noJob ? false : true);
        setPositionName("Your position");
        setCompanyName("Company Name");
        setStartWorkDate("Start date");
        setEndWorkDate("End date");
        setJobDescription("Information about your position...")
    }
    function addWorkExperiance(position, company, startDate, endDate, description){
        setWorkCollection([...workCollection, {
            position: position,
            company: company,
            startDate: startDate,
            endDate: stillWorking ? "now" : endDate,
            description : description
        }])
        displayWork();
    }


    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    }
    currentTheme === "dark-theme" ? setDarkMode() : setLightMode();
  
    
    const toggleTheme = e => {
        if(e.target.className === "light-theme"){
            setDarkMode();
        } else setLightMode();
    }
    
    function themeHandler(){
        if(currentTheme === "light-theme"){
            setCurrentTheme("dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            setCurrentTheme("light-theme");
            localStorage.setItem("theme", "light-theme");
        }
    }
    return (
        <div className="app">
            <div className="left-side">
                <div className="top-page">
                    <p className="logo">CVCraft</p>
                    <button onClick={(e) => {
                        themeHandler();
                        toggleTheme(e);
                    }} className={currentTheme} id="theme" ></button>
                    <button className="printer" onClick={handlePrint}></button>

                </div>
                <Contact 
                    props={props} 
                    inputChange={handleChange}
                    visibilityChange={visibilityHandler}/>
                <Education 
                    education={education} 
                    inputChange={handleChange} 
                    checkboxHandler={checkboxHandler}
                    onSubmit={onSubmit}
                    displayEducation={displayEducation}
                     />
                <Work
                    inputChange={handleChange}
                    addWorkExperiance={addWorkExperiance}
                    checkboxWorkHandler={checkboxWorkHandler}
                    displayWork={displayWork}/>
                <Skills 
                    addSkill={addSkill}
                    inputChange={handleChange}
                    displaySkills={displaySkills}/>
                <Customize 
                    pictureHandler={pictureHandler}
                    colorHandler={colorHandler}/>
            </div>
            <div ref={componentRef} className="right-side">
                <Resume 
                    pictureVisibility={pictureVisibility}
                    props={props} 
                    education={education} 
                    skills={skills}
                    work={work}
                    skillsCollection={skillsCollection}
                    educationCollection={staticEduCollection} 
                    emptyEducation={emptyEducation} 
                    removeEduSegment={removeEduSegment}
                    noSkills={noSkills}
                    noJob={noJob}
                    removeSkills={removeSkillSegment}
                    workCollection={workCollection}
                    removeWorkSegment={removeWorkSegment}
                    accentColor={accentColor}/>
            </div>
            
        </div>
        
    )
}
