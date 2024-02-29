import './styles.css'
import Profile from './Profile'
import ContactResume from './ContactResume'
import EducationResume from './EducationResume'
import SkillsResume from './SkillsResume'
import WorkResume from './WorkResume'

export default function Resume({
    props, 
    education, 
    skills, 
    removeWorkSegment, 
    workCollection, 
    work, 
    noJob, 
    removeSkills, 
    skillsCollection, 
    noSkills, 
    educationCollection, 
    emptyEducation, 
    removeEduSegment}){
    return (
        <div className="resume">
                <Profile props={props}/>
                <div className='resume-content'>
                    <div className='middle-resume-section'>
                        <ContactResume props={props}/>
                        <SkillsResume 
                            skills={skills} 
                            skillsCollection={skillsCollection}
                            noSkills={noSkills}
                            removeSkills={removeSkills}/>
                        
                    </div>
                    <div className='lower-resume-section'>
                        <EducationResume 
                            props={props} 
                            education={education} 
                            educationCollection={educationCollection} 
                            emptyEducation={emptyEducation}
                            removeEduSegment={removeEduSegment}
                            />
                        <WorkResume
                            work={work}
                            noJob={noJob}
                            workCollection={workCollection}
                            removeWorkSegment={removeWorkSegment}
                        />
                    </div>
                </div>
               
                
        </div>  
    )
} 
