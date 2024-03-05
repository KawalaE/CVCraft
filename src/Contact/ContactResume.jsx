import React from 'react';
import ReactDOM from 'react-dom/client'

export default function ContactResume({props, accentColor}){
    return(
        <>  
        <div className="contact-box">
            <p className="contact-info" style={{backgroundColor: `${accentColor}`}}>Contact</p>
            <div className="contact-inside">
                {props.phone.phoneVisibility && <div className="contact-element">
                    <p className="phone-icon"></p>
                    <p>{props.phone.phoneNumber}</p>
                </div>}
                {props.email.emailVisibility && <div className="contact-element">
                    <p className="email-icon"></p>
                    <p>{props.email.email}</p>
                </div>}
                {props.location.locationVisibility && <div className="contact-element">
                    <p className="location-icon"></p>
                    <p>{props.location.location}</p>
                </div>}
                {props.github.githubVisibility && <div className="contact-element">
                    <p className="github-icon"></p>
                    <a href={`${props.github.github}`}>{props.github.github}</a>
                </div>}
                {props.linkedin.linkedinVisibility && <div className="contact-element">
                    <p className="linkedin-icon"></p>
                    <a href={`${props.linkedin.linkedin}`}>{props.linkedin.linkedin}</a>
                </div>}
                {props.portfolio.portfolioVisibility && <div className="contact-element">
                    <p className="portfolio-icon"></p>
                    <a href={`${props.portfolio.portfolio}`}>{props.portfolio.portfolio}</a>
                </div>}
            </div>
            
        </div>   
        </>
    )
}
