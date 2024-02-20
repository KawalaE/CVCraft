import "./styles.css"
import ImageCroper from "./ImageCropper"
import ReactDom from 'react-dom'

export default function Modal({ updateAvatar, closeModal}){    
    return ReactDom.createPortal(
        <>
            <div className="overlay">
                <div className="modal">
                <ImageCroper 
                        updateAvatar={updateAvatar}
                        closeModal={closeModal}/>
                </div> 
            </div>
        </>,
        document.getElementById('portal')
    )
}