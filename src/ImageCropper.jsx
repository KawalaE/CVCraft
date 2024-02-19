import "./styles.css"
import { useState } from "react";
import { useRef } from "react";
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop }  from 'react-image-crop'
import setCanvasPreview from "./setCanvasPreview";


const MIN_DIMENSION = 175;
const ASPECT_RATIO = 1;

export default function ImageCroper({ updateAvatar, closeModal }){
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [data, setData] = useState();
    const [crop, setCrop] = useState();
    const [error, setError] = useState('');

    function handleChange(e){
        const file = e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            const imageElement = new Image();
            const imageUrl = reader.result.toString();
            imageElement.src = imageUrl;
            imageElement.addEventListener("load", (e)=>{
                if(error) setError('');
                const {naturalWidth, naturalHeight } = e.currentTarget;
                if(naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION){
                    setError("Minimal resolution is 150 x 150 px.");
                    return setData();
                }
            })
            setData(imageUrl);
        })
        reader.readAsDataURL(file);
    }
   

    function onImageLoad(e){
        const {width, height} = e.currentTarget;
        const cropWidthInPrecent = MIN_DIMENSION/width * 100;
        const crop = makeAspectCrop({
                unit:"%",
                width: cropWidthInPrecent,
            }, 
            ASPECT_RATIO, 
            width, 
            height);
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    }
    return (
        <>
            <input id="image" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleChange}/>
            {error && <p>{error}</p>}
            {data && ( 
                <>
                    <ReactCrop 
                        crop={crop}
                        onChange={(pixelCrop, precentCrop) => setCrop(precentCrop)}
                        circularCrop
                        keepSelection
                        aspect={ASPECT_RATIO}
                        minWidth={MIN_DIMENSION}>
                        <img ref={imgRef} src={data} onLoad={onImageLoad} alt="Upload" style={{maxHeight:"70vh"}}></img>
                    </ReactCrop>  
                    <button onClick={() => {
                        setCanvasPreview(
                            imgRef.current,
                            previewCanvasRef.current,
                            convertToPixelCrop(
                                crop,
                                imgRef.current.width,
                                imgRef.current.height
                            )
                        );
                        const dataURL = previewCanvasRef.current.toDataURL();
                        updateAvatar(dataURL);
                        closeModal();
                    }}>Crop Imge</button>  
                </>
            )}
            {crop && 
                (<canvas
                    ref={previewCanvasRef}
                    className="mt-4"
                    style={{
                        display:"none",
                        border:"1px solid black",
                        objectFit:"contain",
                        width:150,
                        height: 150,
                   }}
                />   
            )}
        </>  
    )
}