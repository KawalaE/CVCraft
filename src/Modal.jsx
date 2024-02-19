import "./styles.css"
import ImageCroper from "./ImageCropper"

export default function Modal({ updateAvatar, closeModal}){    
    return (
        <>
            <div className="modal">
                <button className={"close-modal"} onClick={closeModal}></button>
               <ImageCroper 
                    updateAvatar={updateAvatar}
                    closeModal={closeModal}/>
            </div> 
        </>
    )
}