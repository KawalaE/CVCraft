import './styles.css'
import Profile from './Profile'
import ContactResume from './ContactResume'
import Education from './Education'
import EducationResume from './EducationResume'

export default function Resume({props}){
    return (
        <div className="resume">
                <Profile props={props}/>
                <div className='middle-resume-section'>
                    <ContactResume props={props}/>
                    <EducationResume props={props}/>
                </div>
                
        </div>
    )
} 
