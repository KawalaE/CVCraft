import './styles.css'
import Profile from './Profile'
import ContactResume from './ContactResume'
import EducationResume from './EducationResume'

export default function Resume({props, education, educationCollection, emptyEducation, removeEduSegment}){
    return (
        <div className="resume">
                <Profile props={props}/>
                <div className='middle-resume-section'>
                    <ContactResume props={props}/>
                    <EducationResume 
                        props={props} 
                        education={education} 
                        educationCollection={educationCollection} 
                        emptyEducation={emptyEducation}
                        removeEduSegment={removeEduSegment}/>
                </div>
                
        </div>
    )
} 
