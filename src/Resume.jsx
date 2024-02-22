import './styles.css'
import Profile from './Profile'
import Contact from './Contact'
import ContactResume from './ContactResume'

export default function Resume({props}){
    return (
        <div className="resume">
            <div className='upper-part'>
                <Profile/>
                <ContactResume props={props}/>
            </div>
            

        </div>
    )
} 
