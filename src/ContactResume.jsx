
export default function ContactResume({props}){
    return(
        <>  
        <div className="contact-box">
            <p className="contact-info">Contact</p>
            <div className="contact-inside">
                <div className="contact-element">
                    <p className="phone-icon"></p>
                    <p>{props.phoneNumber}</p>
                </div>
                <div className="contact-element">
                    <p className="email-icon"></p>
                    <p>{props.email}</p>
                </div>
                <div className="contact-element">
                    <p className="github-icon"></p>
                    <p>{props.githubWeb}</p>
                </div>
                <div className="contact-element">
                    <p className="linkedin-icon"></p>
                    <p>{props.linkedinWeb}</p>
                </div>
                <div className="contact-element">
                    <p className="portfolio-icon"></p>
                    <p>{props.portfolio}</p>
                </div>
                
            </div>
            
        </div>
            
        </>
    )
}
