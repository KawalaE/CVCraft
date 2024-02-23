
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
               {props.name.nameVisibility && <p className='upper-full-name'>{props.name.fullName}</p>}
               {props.position.positionVisibility && <p className='upper-current-position'>{props.position.position}</p>}
            </div>

        </div>
            {openModal && (<Modal 
                updateAvatar={updateAvatar}
                closeModal={()=>setOpenModal(false)}
            />)}
        
        </>
    )
}
