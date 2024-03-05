import './styles.css'
import Profile from './Profile/Profile'
import ContactResume from './Contact/ContactResume'
import EducationResume from './Education/EducationResume'
import SkillsResume from './Skills/SkillsResume'
import WorkResume from './Work/WorkResume'

export default function Resume({
    pictureVisibility,
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
    removeEduSegment,
    accentColor}){
    return (
        <div className="resume">
                <Profile 
                    props={props} 
                    pictureVisibility={pictureVisibility}
                    accentColor={accentColor}/>
                <div className='resume-content'>
                    <div className='middle-resume-section'>
                        <ContactResume 
                            props={props}
                            accentColor={accentColor}/>
                        <SkillsResume 
                            skills={skills} 
                            skillsCollection={skillsCollection}
                            noSkills={noSkills}
                            removeSkills={removeSkills}
                            accentColor={accentColor}/>
                        
                    </div>
                    <div className='lower-resume-section'>
                        <EducationResume 
                            props={props} 
                            education={education} 
                            educationCollection={educationCollection} 
                            emptyEducation={emptyEducation}
                            removeEduSegment={removeEduSegment}
                            accentColor={accentColor}
                            />
                        <WorkResume
                            work={work}
                            noJob={noJob}
                            workCollection={workCollection}
                            removeWorkSegment={removeWorkSegment}
                            accentColor={accentColor}
                        />
                    </div>
                </div>
        </div>  
    )
} 
