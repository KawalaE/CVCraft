import "./styles.css"
import ImageCroper from "./ImageCropper"

export default function Modal({ updateAvatar, closeModal}){    
    return (
        <>
            <div className="modal">
               <ImageCroper 
                    updateAvatar={updateAvatar}
                    closeModal={closeModal}/>
            </div> 
        </>
    )
}