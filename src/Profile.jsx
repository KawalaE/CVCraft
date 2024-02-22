
import Pen from "./assets/pen.svg"
import { useState, useRef } from "react"
import Modal from "./Modal";

export default function Profile({props}){
    const avatarURL = useRef("https://cdn-icons-png.flaticon.com/512/147/147285.png");
    const [openModal, setOpenModal] = useState(false);
    
    const updateAvatar = (imgSrc) => {
        avatarURL.current = imgSrc;
      };
    return (
        <>
        <div className="profile">
            <div className="picture">
                <img onClick={()=>setOpenModal(true)}  src={avatarURL.current} className="profile-pic"/>
            </div>
            <div className='upper-info'>
                <p className='upper-full-name'>{props.fullName}</p>
                <p className='upper-current-position'>{props.position}</p>
            </div>

        </div>
            {openModal && (<Modal 
                updateAvatar={updateAvatar}
                closeModal={()=>setOpenModal(false)}
            />)}
        
        </>
    )
}
