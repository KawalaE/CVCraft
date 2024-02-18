import "./styles.css"
import ImageCroper from "./ImageCropper"

export default function Modal({ updateAvatar }){    
    return (
        <>
            <dialog open className="modal">
               <ImageCroper updateAvatar={updateAvatar}/>
            </dialog> 
        </>
    )
}