import './styles.css'
import Profile from './Profile'
import ContactResume from './ContactResume'

export default function Resume({props}){
    return (
        <div className="resume">
                <Profile props={props}/>
                <ContactResume props={props}/>
        </div>
    )
} 
