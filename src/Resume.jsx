import './styles.css'
import Profile from './Profile'
import ContactResume from './ContactResume'
import EducationResume from './EducationResume'

export default function Resume({props, education, staticEducation}){
    return (
        <div className="resume">
                <Profile props={props}/>
                <div className='middle-resume-section'>
                    <ContactResume props={props}/>
                    <EducationResume props={props} education={education} staticEducation={staticEducation}/>
                </div>
                
        </div>
    )
} 
