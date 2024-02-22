import { useState } from "react"

export default function ContactResume({props}){
    return(
        <>
            <p className="contact-info">Contact</p>
            <p>{props.phoneNumber}</p>
            <p>{props.email}</p>
            <p>{props.githubWeb}</p>
            <p>{props.linkedinWeb}</p>
            <p>{props.portfolio}</p>
        </>
    )
}
