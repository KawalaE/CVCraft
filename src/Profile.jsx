
import Pen from "./assets/pen.svg"
import { useState, useRef } from "react"
import Modal from "./Modal";

export default function Profile(){
    const avatarURL = useRef("https://avatarfiles.alphacoders.com/161/161002.jpg");
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
            {openModal && (<Modal 
                updateAvatar={updateAvatar}
                closeModal={()=>setOpenModal(false)}
            />)}
        </div>
        
        </>
    )
}
