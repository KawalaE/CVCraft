import "./styles.css"
import Pen from "./assets/pen.svg"
export default function Profile(){
    
    return (
        <>
        <img className="profile"/>
        <button className="pen">
            <img src= {Pen} alt="" />
        </button>
        </>
    )
}