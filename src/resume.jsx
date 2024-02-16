import './styles.css'
import circleAdd from "./assets/add-circle.svg"

export default function Resume(){
    return (
        <div className="resume">
            <div className="concise-side">
                <button className='add-picture'>
                    <img src={circleAdd} alt="Circular add button"/>
                </button>
                
            </div>
            <div className="wide-side">

            </div>
        </div>
    )
}