export default function ContactResume({props}){
    return(
        <>  
        <div className="contact-box">
            <p className="contact-info">Contact</p>
            <div className="contact-inside">
                {props.phone.phoneVisibility && <div className="contact-element">
                    <p className="phone-icon"></p>
                    <p>{props.phone.phoneNumber}</p>
                </div>}
                {props.email.emailVisibility && <div className="contact-element">
                    <p className="email-icon"></p>
                    <p>{props.email.email}</p>
                </div>}
                {props.github.githubVisibility && <div className="contact-element">
                    <p className="github-icon"></p>
                    <p>{props.github.github}</p>
                </div>}
                {props.linkedin.linkedinVisibility && <div className="contact-element">
                    <p className="linkedin-icon"></p>
                    <p>{props.linkedin.linkedin}</p>
                </div>}
                {props.portfolio.portfolioVisibility && <div className="contact-element">
                    <p className="portfolio-icon"></p>
                    <p>{props.portfolio.portfolio}</p>
                </div>}
            </div>
            
        </div>
            
        </>
    )
}
