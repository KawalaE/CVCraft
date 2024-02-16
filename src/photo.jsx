import { useState } from "react"
import "./styles.css"
export default function UploadPicture(){
    const [data, setData] = useState();

    function handleChange(e){
        setData(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <dialog open>
                <input id="image" type="file" accept="image/png, image/jpg" onChange={handleChange}/>
                {console.log(data)}
                {data && (
                    <img src={data}></img>
                )}
            </dialog> 
            
        </>
    )
}