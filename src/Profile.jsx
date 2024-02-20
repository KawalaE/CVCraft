
import Pen from "./assets/pen.svg"
import { useState, useRef } from "react"
import Modal from "./Modal";

export default function Profile(){
    const avatarURL = useRef("https://cdn-icons-png.flaticon.com/512/147/147285.png");
    const [openModal, setOpenModal] = useState(false);
    
    const updateAvatar = (imgSrc) => {
        avatarURL.current = imgSrc;
      };
    return (
        <>
        <div className="profile">
            <img src={avatarURL.current} className="profile-pic"/>
            <button onClick={()=>setOpenModal(true)} className="pen">
                <img src={Pen} alt="" />
            </button>
        </div>
            {openModal && (<Modal 
                updateAvatar={updateAvatar}
                closeModal={()=>setOpenModal(false)}
            />)}
        
        
        </>
    )
}
