import { useState } from "react"

export default function ContactResume({props}){
    return(
        <>
            <div className='upper-info'>
                <p className='upper-full-name'>{props.fullName === "" ? "Richard Sanchez": props.fullName}</p>
                <p className='upper-current-position'>{props.position=== "" ? "Marketing Manager": props.position}</p>
            </div>
        </>
    )
}
